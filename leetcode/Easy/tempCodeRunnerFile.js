const readline = require("readline");

// Lexer function
function tokenize(input) {
    const tokenSpecs = [
        { type: "NUMBER", regex: /\d+(\.\d+)?/ },
        { type: "OPERATOR", regex: /[+\-*/]/ },
        { type: "SEMICOLON", regex: /;/ },
        { type: "SKIP", regex: /[ \t]+/ },
        { type: "INVALID", regex: /./ },
    ];

    const tokens = [];
    let currentPosition = 0;

    while (currentPosition < input.length) {
        let matchFound = false;

        for (const spec of tokenSpecs) {
            const regex = new RegExp(`^${spec.regex.source}`);
            const match = input.slice(currentPosition).match(regex);

            if (match) {
                matchFound = true;
                const value = match[0];

                if (spec.type === "NUMBER") {
                    tokens.push({ type: "NUMBER", value: parseFloat(value) });
                } else if (spec.type === "OPERATOR" || spec.type === "SEMICOLON") {
                    tokens.push({ type: spec.type, value });
                } else if (spec.type === "INVALID") {
                    console.error(`Lexer Error: Invalid token '${value}' at position ${currentPosition}`);
                }

                currentPosition += value.length;
                break;
            }
        }

        if (!matchFound) break;
    }

    tokens.push({ type: "EOF", value: null });
    return tokens;
}

// Parser function
function createParser(tokens) {
    let currentIndex = 0;

    function currentToken() {
        return tokens[currentIndex];
    }

    function advance() {
        currentIndex++;
    }

    function parse() {
        try {
            const result = expr();
            if (currentToken().type !== "SEMICOLON" && currentToken().type !== "EOF") {
                throw new SyntaxError(`Unexpected token '${currentToken().value}'`);
            }
            return result;
        } catch (error) {
            console.error(`Syntax Error: ${error.message}`);
            synchronize();
            return null;
        }
    }

    function synchronize() {
        while (currentToken().type !== "SEMICOLON" && currentToken().type !== "EOF") {
            advance();
        }
        if (currentToken().type === "SEMICOLON") advance();
    }

    function expr() {
        let result = term();
        while (currentToken().type === "OPERATOR" && ["+", "-"].includes(currentToken().value)) {
            const op = currentToken().value;
            advance();
            const nextTerm = term();
            result = op === "+" ? result + nextTerm : result - nextTerm;
        }
        return result;
    }

    function term() {
        let result = factor();
        while (currentToken().type === "OPERATOR" && ["*", "/"].includes(currentToken().value)) {
            const op = currentToken().value;
            advance();
            const nextFactor = factor();
            if (op === "/" && nextFactor === 0) {
                throw new SyntaxError("Division by zero");
            }
            result = op === "*" ? result * nextFactor : result / nextFactor;
        }
        return result;
    }

    function factor() {
        const token = currentToken();
        if (token.type === "NUMBER") {
            advance();
            return token.value;
        }
        throw new SyntaxError(`Unexpected token '${token.value}'`);
    }

    return { parse };
}

// Main function
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter an expression (or type 'exit' to quit): ", (inputExpression) => {
        if (inputExpression.toLowerCase() === "exit") {
            rl.close();
            return;
        }

        // Tokenize the input
        const tokens = tokenize(inputExpression);
        console.log("Tokens:", tokens);

        // Parse and evaluate the tokens
        const parser = createParser(tokens);
        try {
            const result = parser.parse();
            if (result !== null) {
                console.log("Result:", result);
            }
        } catch (error) {
            console.error(`Runtime Error: ${error.message}`);
        }

        // Close the readline interface and restart the program
        rl.close();
        main(); // Restart for the next input
    });
}

// Run the calculator
main();
