var splitArray = function (nums, k) {
  if (nums.length < k) return -1;
  let low = Math.max(...nums);
  let high = nums.reduce((sum, curr) => {
    return (sum + curr);
  }, 0);
  let ans = 0;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let subArr = 1;
      let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + sum <= mid) {
        sum += nums[i];
      } else {
        subArr++;
        sum = nums[i];
      }
    }
    if (subArr <= k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
//   console.log(low, high,ans);
//we can return low or ans; anything is ok
//   return low;
  return ans;
};

splitArray([7, 2, 5, 10, 8], 2);
splitArray( [1,2,3,4,5], 2);
