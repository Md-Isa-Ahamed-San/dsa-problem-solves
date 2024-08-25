//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (firstInput, secondInput) => {
  let cell = firstInput[1];
  let n = firstInput[0];
  let inputs = secondInput;

  let i = 0;
  while (i <= cell) {
    if (i+1 + secondInput[i] === cell) {
      console.log("YES");
      return;
    }
    i = i + secondInput[i];
    // console.log(i)
  }

  console.log("NO");
};
const handleTestCases = () => {
  rl.question("", testCase => {
    const fl = testCase.split(" ").map(Number);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
        const sl = input.split(" ").map(Number);
        theFunctions(fl, sl);
      });
    };
    handleInput();
  });
};
handleTestCases();
