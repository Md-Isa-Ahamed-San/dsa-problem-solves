var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let minLength = Infinity;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return 1;
    sum += nums[i];
    if (sum >= target) {
      minLength = Math.min(minLength, i - start + 1);
      while (sum - nums[start] >= target) {
        sum -= nums[start];
        start++;
      }
      minLength = Math.min(minLength, i - start + 1);
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
console.log(minSubArrayLen(7, [2, 3, 2, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(
  minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12])
);
