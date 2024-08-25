var singleNumber = function(nums) {
    
    return nums.reduce((acc,xor)=>acc^xor)
    
};
singleNumber([4,1,2,1,2])