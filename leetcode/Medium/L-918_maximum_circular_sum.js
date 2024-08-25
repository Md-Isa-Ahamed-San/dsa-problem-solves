let maximumSubarray = arr => {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
let minimumSubarray = arr => {
  let sum = 0;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, sum);
    if (sum > 0) {
      sum = 0;
    }
    // console.log(sum)
  }
  return min;
};

var maxSubarraySumCircular = function (nums) {
  let sum = nums.reduce(acc, curr => acc + curr, 0);
  let minSum = minimumSubarray(nums);
  let maxSum = maximumSubarray(nums);
  let circularSum = sum - minSum;
  if (maxSum > 0) return Math.max(maxSum, circularSum);
  return maxSum
};
// maxSubarraySumCircular([1, -2, 3, -2]);
// maxSubarraySumCircular([-1, -1, -1]);
// maxSubarraySumCircular([5, -1, 5]);
