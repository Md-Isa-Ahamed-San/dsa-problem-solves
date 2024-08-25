var search = function (nums, target) {
  if (nums.length === 1 && nums[0]===target) return 0;

  let start = 0;
  let end = nums.length - 1;
  while (start<=end) {
    //here start and end should be <= because it can be happen that start and end lies on the target
    let mid = Math.floor((start + end) / 2);

    console.log(nums[mid]);
    if (nums[mid] === target) {
      console.log("found");
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else start = mid + 1;
  }
  console.log("not found;");
  return -1;
};
// search([-1, 0, 3, 5, 9, 12], 9);
search([2,5], 5);
// 3+5
