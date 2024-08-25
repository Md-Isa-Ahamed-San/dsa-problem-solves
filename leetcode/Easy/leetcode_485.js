var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutive = 0;
  let count = 0;
  nums.forEach(item => {
    item === 1
      ? (count += 1)
      : ((maxConsecutive = Math.max(maxConsecutive, count)), (count = 0))
    //   console.log(maxConsecutive,count)
  });
  maxConsecutive = Math.max(maxConsecutive, count)
  console.log(maxConsecutive)
  return maxConsecutive
};
findMaxConsecutiveOnes([1,1,0,1,1,1]);
