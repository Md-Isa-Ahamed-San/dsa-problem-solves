var smallestDivisor = function (nums, threshold) {
  let max = Math.max(...nums);
  let min = 1;
  
  let ansDivisor =Infinity;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    // console.log("🚀 ~ smallestDivisor ~ mid:", mid);
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
      sum += Math.ceil(nums[i] / mid);
    }
    if (sum <= threshold) {
          max = mid - 1;
        //   console.log("mid: ",mid)
          ansDivisor = Math.min(mid,ansDivisor)
    }
      else{
        min = mid+1;
      }
  }
//   console.log(ansDivisor);
  return ansDivisor;
};
smallestDivisor([1, 2, 5, 9], 6);
smallestDivisor([44, 22, 33, 11, 1], 5);
smallestDivisor([21212, 10101, 12121], 1000000);
