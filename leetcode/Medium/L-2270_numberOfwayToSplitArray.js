// better
var waysToSplitArray = function (nums) {
  let leftSumArray = [];
  let leftSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    leftSumArray.push(leftSum);
  }
  let rightSumArray = [];
  let rightSum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum += nums[i];
    rightSumArray.push(rightSum);
  }
  rightSumArray.reverse();
  console.log(leftSumArray, rightSumArray);
  for (let i = 0; i < nums.length - 1; i++) {
    if (leftSumArray[i] >= rightSumArray[i + 1]) {
      count++;
    }
  }
  return count;
};
// console.log(waysToSplitArray([10, 4, -8, 7]));
// console.log(waysToSplitArray([2,3,1,0]));

// optimized

var waysToSplitArrayO = function (nums) {
  let map = new Map();
  let leftSum = 0;
  let rightSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    map.set(i, leftSum);
  }
  for (let i = nums.length - 1; i >= 1; i--) {
    rightSum += nums[i];
    // console.log(map.get(i-1),rightSum)
    if (map.get(i - 1) >= rightSum) {
      count++;
    }
  }
  return count;
};
// console.log(waysToSplitArrayO([2, 3, 1, 0]));

var waysToSplitArrayBest = function (nums) {

  let sum = nums.reduce((acc,curr)=>acc+curr,0)
  let rightSum = 0;
  let leftSum = 0;
  let count = 0;
  for (let i = 0; i <nums.length-1; i++) {
    leftSum+= nums[i]
    rightSum = sum - leftSum;
    if(rightSum<= leftSum){
        count++;
    }

  }
  return count;
};

// console.log(waysToSplitArrayBest([2, 3, 1, 0]));