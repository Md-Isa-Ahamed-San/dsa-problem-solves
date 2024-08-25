const readline = require("readline");
var _ = require('lodash');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (str1, str2) => {
  let sortedStr1 = str1.split("").sort().join("");
  for (let i = 0; i < str2.length; i++) {
    let slicedArr = str2.slice(i, i + str1.length);
    let slicedSortedStr2 = slicedArr.split("").sort().join("");

    if (sortedStr1 === slicedSortedStr2) {
      console.log("YES");
      return;
    }
  }
  console.log("NO");
};
//works here but wont work on codeforces as it needs an external library lodash to run
let theFunctionsWithObj = (str1, str2) => {
    let str1Obj = {};
    for (let i = 0; i < str1.length; i++) {
      str1Obj[str1[i]] = (str1Obj[str1[i]] || 0) + 1;
    }
  
    for (let i = 0; i < str2.length; i++) {
      let slicedArr = str2.slice(i, i + str1.length);
  
      let str2Obj = {};
      for (let i = 0; i < slicedArr.length; i++) {
        str2Obj[slicedArr[i]] = (str2Obj[slicedArr[i]] || 0) + 1;
      }
//   console.log(str1Obj,str2Obj)
  //i had to import lodash function
      if (_.isEqual(str1Obj,str2Obj) ) {
        console.log("YES");
        return;
      }
    }
    console.log("NO");
  };
  

const handleTestCases = () => {
  rl.question("", testCase => {
    testCase = parseInt(testCase);
    let count = 0;

    const handleInput = () => {
      rl.question("", input1 => {
        rl.question("", input2 => {
            theFunctions (input1, input2);
          count++;
          if (count < testCase) {
            handleInput();
          } else {
            rl.close();
          }
        });
      });
    };
    handleInput();
  });
};
handleTestCases();
