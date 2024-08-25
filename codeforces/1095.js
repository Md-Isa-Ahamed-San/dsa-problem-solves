const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let repeatingCipher = str => {
  let newStr = "";
  let i = 0;
  let d = 0;
  while (i < str.length) {
    newStr += str[i];
    d++;
    i = i + d;
  }
  console.log(newStr);
};
const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);

    const handleInput = () => {
      rl.question("", input => {
        repeatingCipher(input);
        if (input.length === testCase) {
          handleInput();
        } else {
          rl.close();
        }
        rl.close();
      });
    };
    handleInput();
  });
};
handleTestCases();
