const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var capitalization = (s) => {
    let a = s[0].toUpperCase()
   console.log(a+s.slice(1))
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a] = input.split(" ").map(String);
      capitalization(a);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
