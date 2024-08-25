const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var boyOrGirl = (s) => {
   let newS = new Set(s)
 newS.size%2==0 ? console.log("CHAT WITH HER!"): console.log("IGNORE HIM!")
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a] = input.split(" ").map(String);
      boyOrGirl(a);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
