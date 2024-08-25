var check = function (nums) {
  let min = nums[0];
  let foundBreak = false;

  for (let i = 0; i < nums.length; i++) {
    if (
      (foundBreak && nums[i] > min) ||
      (foundBreak && nums[i] > nums[i + 1])
    ) {
      console.log("false");
      return false;
    }
    if (nums[i] > nums[i + 1]) {
      foundBreak = true;
    }
  }

  console.log("true");
  return true;
};
check([1, 2, 3]);
check([2, 7, 4, 1, 2, 6, 2]);
check([8, 5, 4, 5, 1, 4, 5, 2, 2]);
check([3, 4, 5, 1, 2]);
check([3, 1, 2, 2, 4]);
