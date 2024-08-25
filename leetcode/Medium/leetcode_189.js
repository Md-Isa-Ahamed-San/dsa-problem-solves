let swap = (nums, i, j) => {
  nums[i], (nums[j] = nums[j]), nums[i];
  return nums;
};
var rotate = function (nums, k) {
  let i = 0;
  let len = nums.length;
  let swapsFirstIndex = nums.length - 1;
  while (k < len) {
    if (swapsFirstIndex - k !== undefined) {
      [nums[swapsFirstIndex], nums[swapsFirstIndex - k]] = [
        nums[swapsFirstIndex - k],
        nums[swapsFirstIndex],
      ];
      swapsFirstIndex = swapsFirstIndex - k;
      len--;
      console.log("len: ", len);
      console.log(nums);
    }
  }

  return nums;
};
rotate([1, 2, 3, 4], 1);

1, 2, 3, 6, 7, 4, 5;
1, 6, 7, 2, 3, 4, 5;
6, 7, 1, 2, 3, 4, 5;
