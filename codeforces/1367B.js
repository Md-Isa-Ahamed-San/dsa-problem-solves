//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (n, numArr) => {
  //   console.log(n, numArr);
  let count = 0;
  let oddCount = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (i % 2 !== numArr[i] % 2) {
      count++;
    }
    if (numArr[i] % 2 !== 0) {
      oddCount++;
    }
  }
    // console.log(count,oddCount)
  if (Math.floor(numArr.length / 2) !== oddCount) {
    console.log(-1);
  } else if (Math.floor(numArr.length / 2) === oddCount) {
    console.log(count / 2);
  } else {
    console.log(-1);
  }
};
const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);
    let count = 0;

    const handleInput = () => {
      rl.question("", input => {
        const n = input.split(" ").map(Number);
        rl.question("", input => {
          const numArr = input.split(" ").map(Number);
          theFunctions(n[0], numArr);
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
