//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = nums => {
  //   console.log(nums);
  let sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= nums[i + 1]) {
      if (nums[i + 1] - 1 < 0) {
        break;
      }

      nums[i] = nums[i + 1] - 1;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= nums[i + 1] ) {
      break;
    } 
    else sum += nums[i];
  }
  // console.log(nums);
  console.log(sum);
};
const handleTestCases = () => {
  rl.question("", n => {
    n = parseInt(n);

    const handleInput = () => {
      rl.question("", input => {
        const arr = input.split(" ").map(Number);
        if (arr.length === n) {
          theFunctions(arr);
        }
      });
    };
    handleInput();
  });
};
handleTestCases();
