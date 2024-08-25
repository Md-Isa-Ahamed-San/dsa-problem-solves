var maxSubArray = function (nums) {
  if (nums.length <= 1) return nums;
  let sum = 0;
  let maxSumSubArray = -Infinity;
  let startIndex=0;
  let tempStart =0
  let endIndex;
  let theSubArray = []
  for (let i = 0; i < nums.length; i++) {
    if(sum<=0) {startIndex = i}
    sum += nums[i];
    if (sum > maxSumSubArray) {
      maxSumSubArray = sum;
      tempStart = 0
      endIndex = i
    }
    if (sum < 0) {
      sum = 0;
      startIndex = tempStart
    }
  }
//   console.log(startIndex,endIndex)
//   console.log(maxSumSubArray);
  for(let i=startIndex;i<=endIndex;i++){
    theSubArray.push(nums[i])
  }
  console.log("theSubArray: ",theSubArray)
  console.log("🚀 ~ maxSubArray ~ maxSumSubArray:", maxSumSubArray)
  return maxSumSubArray;
};
maxSubArray([-1,-2])
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([5,4,-1,7,8]);
// maxSubArray([1]);
maxSubArray([5, 4, 3, 2, 1]);
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 6]);
maxSubArray( [10000, -10000, 20000, -20000, 30000, -30000, 40000, -40000]);
