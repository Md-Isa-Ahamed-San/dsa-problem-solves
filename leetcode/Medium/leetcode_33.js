var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    // console.log(low, high);
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    if (nums[low] <= nums[mid]) {
      if (target <= nums[mid] && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    // console.log(low, high);
  }
  return -1;
};

console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 4));
console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 8));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
console.log(search([3, 1, 2], 2));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
