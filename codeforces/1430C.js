//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numOnWhiteBoard = nums => {
  //   console.log(nums);
  let theNumber = nums[0];
  let oldNums = theNumber;
  console.log(2);
  console.log(oldNums - 1, oldNums);
  while (oldNums > 2) {
    console.log(oldNums - 2, oldNums);
    oldNums--;
  }
};
const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
        const a = input.split(" ").map(Number);
        numOnWhiteBoard(a);
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
