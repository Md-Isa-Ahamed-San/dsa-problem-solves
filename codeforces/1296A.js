//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (n, numsArr) => {
//   console.log(n, numsArr);
  let odd = 0;
  let even = 0;
  let totalSum = 0;
  for (let i = 0; i < numsArr.length; i++) {
    totalSum += numsArr[i];
    if (numsArr[i] % 2 === 0) {
      even++;
    } else odd++;
  }
//   console.log(even,odd)
  if (totalSum % 2 !== 0) {
    console.log("YES");
    return;
  } else {
    // console.log(odd,n)
    if (odd === n || even === n) {
      console.log("NO");
      return;
    }
    console.log("YES");
  }
};
const handleTestCases = () => {
  rl.question("", (testCase) => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", (numberOfInput) => {
        let n = numberOfInput.split(" ").map(Number);
        rl.question("", (nums) => {
          const numsArr = nums.split(" ").map(Number);
          theFunctions(n[0], numsArr);
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
