var moveZeroes = function (nums) {
  let currentZeroIdx;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && currentZeroIdx === undefined) {
      currentZeroIdx = i;
    }
    if (nums[i] !== 0 && currentZeroIdx !== undefined) {
      [nums[currentZeroIdx], nums[i]] = [nums[i], nums[currentZeroIdx]];
      currentZeroIdx++;
    }
  }
  console.log(nums);
  return nums;
};
moveZeroes([5, 5, 0, 5, 5, 0, 1, 0, 3, 12]);
