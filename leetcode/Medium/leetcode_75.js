var sortColors = function (nums) {
  let low = 0;
  let current = 0;
  let high = nums.length - 1;
  while (current <= high) {
    console.log("pointer of mid: ", current);
    if (nums[current] == 2) {
      [nums[current], nums[high]] = [
        nums[high],
        nums[current],
      ];
      high--;
      console.log("pointerOfHigh: ", high);
      console.log(nums);
    } else if (nums[current] == 0) {
      [nums[current], nums[low]] = [
        nums[low],
        nums[current],
      ];
      current++;
      low++;
      console.log("pointerOfLow: ", low);
      console.log(nums);
    } else {
      current++;
    }
  }
  //   console.log(nums);
  return nums;
};
// sortColors([1, 0]);
sortColors([2, 1, 2]);
sortColors([2, 0,1]);
// sortColors([1, 2, 0]);
