let reverseApart = (nums, start, end) => {
  if (nums.length <= 1) return nums;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  return nums;
};
var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  nums.reverse();
  reverseApart(nums, 0, k - 1);
  reverseApart(nums, k, nums.length - 1);
  console.log(nums);
  return nums;
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
