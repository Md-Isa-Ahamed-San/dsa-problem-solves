const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let boringApartment = num => {
  let markLeftOne = null;

  let countFromLeft = 0;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") {
      markLeftOne = i;
      sum += countFromLeft;
      countFromLeft = 0;
    }
    if (num[i] === "0" && markLeftOne !== null) {
      countFromLeft++;
    }
  }

  console.log(sum);
};
const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
        boringApartment(input);
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
