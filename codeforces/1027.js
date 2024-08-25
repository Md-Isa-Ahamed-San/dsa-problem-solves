//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (len, str) => {
  let strlen = parseInt(len);
  let left = 0;
  let right = len - 1;
  let canBePalindrome = "YES";
  while (left <= right) {
    if (
      str[left] === str[right] ||
      Math.abs(str[left].charCodeAt(0) - str[right].charCodeAt(0)) == 2
    ) {
      left++;
      right--;
    } else {
      canBePalindrome = "NO";
      break;
    }
  }
  console.log(canBePalindrome);
};
const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", input1 => {
        rl.question("", input2 => {
          theFunctions(input1, input2);
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
