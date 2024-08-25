//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (a, b) => {
  let maxVal = Math.max(a, b);
  let minVal = Math.min(a, b);
  // ans = max( minValue^2 , (2*smallValue)^2 )
  let ans = Math.max(maxVal * maxVal, 4 * minVal * minVal);
  console.log(ans);
};
const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
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
