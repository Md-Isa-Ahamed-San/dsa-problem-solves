var singleNumber = function(nums) {
    const xor = nums.reduce((acc,curr)=> acc^curr)
    const sum = nums.reduce((acc,item)=>acc+item)
    console.log(xor)
    console.log(sum)
    // console.log(sum - (2*xor))
    return xor-((xor^sum) - sum)
};
// singleNumber([2,2,3,2])
singleNumber([0,7,99])
// singleNumber([4,8,8,8])