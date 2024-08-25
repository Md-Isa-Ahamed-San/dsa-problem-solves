const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (n,x) => {
    // console.log(nums);
    if(n === 1 || n ===2){
        console.log(1);
        return;
    }
    let ans = Math.ceil((n-2)/x) +1;
    console.log(ans)

};
const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                const [a, b] = input.split(" ").map(Number);
                theFunctions(a, b);
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
