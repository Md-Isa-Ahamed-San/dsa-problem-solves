var majorityElement = function (nums) {
  let currMejorityEle;
  let count = 0;
  let mejorityNumberCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      currMejorityEle = nums[i];
      count++;
    } else if (nums[i] !== currMejorityEle) {
      count--;
    } else if (nums[i] === currMejorityEle) {
      count++;
    }
  }
  console.log(currMejorityEle, count);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === currMejorityEle) {
      mejorityNumberCount++;
    }
  }
  if (mejorityNumberCount > Math.floor(nums.length / 2)) {
    return currMejorityEle;
  } else return 0;
};
majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([2, 2, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4]);
majorityElement([2, 2, 1, 1, 1, 2, 9, 9, 9]);
