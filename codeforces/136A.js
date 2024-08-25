const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let presents = val => {
//   console.log(val);
  let newArr = [];
  for (let i = 0; i < val.length; i++) {
    newArr[val[i]] = i + 1;
  }
  console.log(newArr.splice(1).join(" "));

};

const handleTestCases = () => {
  rl.question("", n => {
    n = parseInt(n);
    rl.question("", valStr => {
      let val = valStr.trim().split(" ").map(Number);
      // console.log(val)
      let result = presents(val);
      // console.log(result);
      rl.close();
    });
  });
};

handleTestCases();
