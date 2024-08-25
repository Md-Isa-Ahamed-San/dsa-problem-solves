const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let repeatingCipher = str => {
  let newStr = "";
  let list = ['a','e','i','o','u','y']
  for (let i = 0; i < str.length; i++) {
    if (!list.includes(str[i].toLowerCase())) {
      newStr = newStr + "." + str[i].toLowerCase();
    }
  }
  console.log(newStr);
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      repeatingCipher(input);

      handleInput();

      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
