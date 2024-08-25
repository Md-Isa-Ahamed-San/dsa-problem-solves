//with test cases 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let donutShop = (a,b,c) => {
    // console.log(a,b,c);
    let first =-1;
    let second = - 1;
    if(a<c){
        first =1;
    }
    if(b*a>c){
        second=b
    }
    console.log(first,second)
};
const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                const [a, b, c] = input.split(" ").map(Number);
                donutShop(a, b, c);
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
