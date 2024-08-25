//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cPlusEqual = (number, str) => {
//   console.log(number, str);
  let newObj = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newObj[str[i]] = (newObj[str[i]] || 0) + 1;
  }
  let objToArr = Object.entries(newObj);
  objToArr.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < objToArr.length; i++) {
    if (objToArr[i][1] % number !== 0) {
      console.log(-1);
      return 0;
    } else {
    //   console.log(objToArr[i][1] / number);
      newStr += objToArr[i][0].repeat(objToArr[i][1] / number);
    }
  }

  newStr += newStr.repeat(number - 1);
  console.log(newStr);
};
const handleTestCases = () => {
  rl.question("", number => {
    number = parseInt(number);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
        cPlusEqual(number, input);
      });
    };
    handleInput();
  });
};
handleTestCases();
