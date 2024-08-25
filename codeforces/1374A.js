const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (x, y, n) => {
  // console.log(x,y,n);
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     if (x * i + y <= n) {
//       ans = x * i + y;
//     } else break;
//   }
// let ans = (Math.floor((n - y) / x) * x) + y;
  console.log(ans);
};
const handleTestCases = () => {
  rl.question("", (testCase) => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", (input) => {
        const [x, y, n] = input.split(" ").map(Number);
        theFunctions(x, y, n);
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
