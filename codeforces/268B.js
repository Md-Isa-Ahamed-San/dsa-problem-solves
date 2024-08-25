//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = nums => {
  let j = nums;
  let sum = 0;
  for (let i = 1; i <= nums - 1; i++) {
    sum += (nums-i)*i;
}
sum += nums;
console.log(sum)
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const a = input.split(" ").map(Number);
      theFunctions(a[0]);
    });
  };
  handleInput();
};
handleTestCases();
