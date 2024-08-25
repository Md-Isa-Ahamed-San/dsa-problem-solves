//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (firstInput, nums) => {
  n = firstInput[0];
  start = firstInput[1];
  end = firstInput[2];
  //   console.log(firstInput, nums);

  for (let i = 0; i <= nums.length - 1; i++) {
    let ss = i - start > 0 ? i - start : 0;
    let ee = i + end <= nums.length - 1 ? i + end : nums.length-1;
    let found = true;
    // console.log(ss,ee)
    for (let k = ss; k <= ee; k++) {
      if(nums[k]<nums[i]){
        found = false;
      }
    }
    //method 2 
    // for (let j = i; j <= i + end; j++) {
    //   if (j === nums.length) {
    //     break;
    //   }
    //   if (nums[i] > nums[j]) {
    //     found = false;
    //   }
    // }
    // for (let k = i; k >= i - start; k--) {
    //   if (k < 0) {
    //     break;
    //   }
    //   if (nums[i] > nums[k]) {
    //     found = false;
    //   }
    // }
    if (found) {
      console.log(i + 1);
      return;
    }
  }
};
const handleTestCases = () => {
  rl.question("", firstInput => {
    firstInput = firstInput.split(" ").map(Number);
    const handleInput = () => {
      rl.question("", input => {
        const n = input.split(" ").map(Number);
        theFunctions(firstInput, n);
      });
    };
    handleInput();
  });
};
handleTestCases();
