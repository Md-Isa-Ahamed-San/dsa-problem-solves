//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (len, arr) => {
  //   console.log(len, arr);
  let max = len;
  if (arr[0] === "1" || arr[len - 1] === "1") {
    console.log(parseInt(len) * 2);
    return;
  }
  for (let i = 1; i <= len - 2; i++) {
    if (arr[i] === "1") {
      let tempMax = Math.max((i + 1) * 2, (len - i) * 2);
      max = Math.max(tempMax, max);
    }
  }

  console.log(Math.max(len, max));
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
