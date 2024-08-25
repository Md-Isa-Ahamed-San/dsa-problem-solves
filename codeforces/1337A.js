const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ichiHimeAndTriangle = (a, b, c, d) => {
    let x = b
    let y = c
    let z = c
        console.log(x, y, z);

};

const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                const [a, b, c, d] = input.split(" ").map(Number);
                ichiHimeAndTriangle(a, b, c, d);
                count++;
                if (count < testCase) {
                    handleInput();
                } else {
                    rl.close();
                }
            });
        };
        handleInput();
    });
};

handleTestCases();
