const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var needMoney = (k, w, n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += k * (i + 1);
  }
  sum - w < 0 ? console.log(0) : console.log(sum - w);
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a, b, c] = input.split(" ").map(Number);
      needMoney(a, b, c);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
