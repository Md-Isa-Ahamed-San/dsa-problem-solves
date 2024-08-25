//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (a, b, c, d) => {
//   console.log(a, b, c, d);
  let min = Math.min(a, c, d);
  let sum = 256 * min + 32 * Math.min(a - min, b);
  console.log(sum)
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a, b, c, d] = input.split(" ").map(Number);
      theFunctions(a, b, c, d);
    });
  };
  handleInput();
};
handleTestCases();
