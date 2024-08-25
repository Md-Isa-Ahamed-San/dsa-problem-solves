const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var wrongSubs = num => {
  if (num % 2 == 0) console.log("Mahmoud");
  else {
    console.log("Ehab");
  }
  
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a] = input.split(" ").map(Number);
      wrongSubs(a);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
