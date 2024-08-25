var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  let low = 0;
  let high = nums.length - 1;
  if (nums[0] > nums[1]) {
    return 0;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(mid===0){
      low = mid+1;
    }
    if(mid===nums.length-1){
      high = high-1;
    }
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      console.log(nums[mid]);
      return mid;
    }
    if ((nums[mid - 1] || nums[mid + 1]) === undefined) {
      console.log(nums[mid]);
      return mid;
    }
    if (nums[mid] >= nums[mid - 1] && nums[mid + 1] >= nums[mid]) {
      low = mid + 1;
      console.log("f: ",low, high);
    } else if (nums[mid] <= nums[mid - 1] && nums[mid] >= nums[mid + 1]) {
      high = mid - 1;
      console.log("s:",low, high);
    }
    else {
      low =mid+1;
    }
  }
};
// findPeakElement([1, 2, 1, 3, 5, 6, 4]);
// findPeakElement([1, 3, 5, 6, 4]);
// console.log(findPeakElement([1, 3, 5, 6, 2]));
// console.log(findPeakElement([3,4,3,2,1]));
console.log(findPeakElement([1,2,1,2,1]));
