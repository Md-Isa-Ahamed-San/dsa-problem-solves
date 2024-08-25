var missingNumber = function(nums) {
    let n = nums.length
    let sum = (n*(n+1))/2
    
    // console.log(sum)
   let gg =nums.reduce((acc,currentNum)=>acc+=currentNum,0)
//    console.log("🚀 ~ missingNumber ~ gg:", gg)
//    console.log(sum-gg)
return sum - gg
};
missingNumber([9,6,4,2,3,5,7,0,1])