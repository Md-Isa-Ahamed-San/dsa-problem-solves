//with test cases 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cPlusEqual = nums => {
    nums.sort((a,b)=>parseInt(a)-parseInt(b))
    console.log(nums)
    let dif = nums.length /2;
    let diffMean = Math.abs(nums[dif]-nums[dif-1])
    console.log(diffMean)
};
const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                rl.question("", (secInput) => {
                    const a = secInput.split(" ").map(Number);
                    if (a.length === 2*parseInt(input)) {
                        cPlusEqual(a);
                    }
                    count++;
                    if (count < testCase) {
                        handleInput();
                    } else {
                        rl.close();
                    }
                });
            });
        };
        handleInput();
    });
};
handleTestCases();
