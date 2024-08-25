//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (strlen, str) => {
  for (let i = 0; i < strlen - 1; i++) {
    let s = str.slice(i, i + 2);
    if (s[0] !== s[1]) {
      console.log("YES");
      console.log(s);
      return;
    }
  }
  console.log("NO");
};
const handleTestCases = () => {
  rl.question("", strlen => {
    strlen = parseInt(strlen);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
        theFunctions(strlen, input);
      });
    };
    handleInput();
  });
};
handleTestCases();
