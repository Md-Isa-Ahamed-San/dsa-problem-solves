let reverseFunction = (arr, start, end) => {
  for (let i = start; i <= end; i++) {
    while (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  //   console.log(arr);
};
var nextPermutation = function (nums) {
  let dipIdx = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i - 1] < nums[i]) {
      dipIdx = i - 1;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[dipIdx]) {
      [nums[i], nums[dipIdx]] = [nums[dipIdx], nums[i]];
      break;
    }
  }
  console.log(nums);

  reverseFunction(nums, dipIdx + 1, nums.length - 1);
  console.log(nums);
  return nums;
};
nextPermutation([2, 1, 5, 4, 3, 0, 0]);
// nextPermutation([5,4,3,2,1]);
// nextPermutation([1,2,3,4,5]);
