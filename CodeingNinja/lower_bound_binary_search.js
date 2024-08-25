var search = function (nums, target) {
  if (nums.length === 1 && nums[0] === target) return 0;

  let start = 0;
  let end = nums.length - 1;
  let foundIdx = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    //   console.log(nums[mid]);
    if (nums[mid] >= target) {
      foundIdx = mid;
      console.log("foundIdx = ", foundIdx);
      end = mid - 1;
    } else start = mid + 1;
  }
  console.log("foundIdx = ", foundIdx);
  if (foundIdx === -1) return nums.length;
  return foundIdx;
};
search([1, 2, 2, 3, 3, 5], 9);
//   search([3,5,8,15,19], 9);
