var rearrangeArray = function (nums) {
  let numIndexToMoveLeft;
  let len = nums.length;
  let posArr = [];
  let negArr = [];
  for (let i = 0; i < len; i++) {
    nums[i] < 0 ? negArr.push(nums[i]) : posArr.push(nums[i]);
  }
  for (let i = 0; i < posArr.length; i++) {
    nums[i * 2] = posArr[i];
    nums[i * 2 + 1] = negArr[i];
  }
  // console.log(posArr,negArr)
  console.log(nums);
  return nums;
};
var rearrangeArrayOptimal = function (nums) {
  let newArr = [];
  let posIdx = 0;
  let negIdx = 1;
  for (let i = 0; i < nums.length; i++) {
    nums[i] < 0
      ? ((newArr[negIdx] = nums[i]), (negIdx += 2))
      : ((newArr[posIdx] = nums[i]), (posIdx += 2));
  }
  // console.log(newArr)
  return newArr;
};
// rearrangeArray([1, 2, 3, -4, -5, -6]);
rearrangeArray([3, 1, -2, -5, 2, -4]);
rearrangeArrayOptimal([3, 1, -2, -5, 2, -4]);
// rearrangeArray([4,-1, -2, -3, 5, 6]);
// rearrangeArray([-1, -2, -3, 4, 5, 6]);
