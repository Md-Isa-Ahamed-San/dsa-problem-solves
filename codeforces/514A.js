const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chewBacchaAndNumber = nums => {
  if (nums.length === 1) {
    console.log(nums);
    return 0;
  }
  const len = nums.length - 1;
  for (let i = len; i >= 0; i--) {
    if (nums[i] >= 5) {
      if (!(i === 0 && parseInt(nums[i]) === 9)) {
        nums = nums.slice(0, i) + (9 - parseInt(nums[i])) + nums.slice(i + 1);
      }
    }
  }
  console.log(nums);
};

const handleInput = () => {
  rl.question("", input => {
    chewBacchaAndNumber(input);
    rl.close();
  });
};

handleInput();
