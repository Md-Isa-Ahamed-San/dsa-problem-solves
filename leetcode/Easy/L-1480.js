var runningSum = function(nums) {
    let s = []
    let sum = 0;
    for(let i =0;i<nums.length;i++){
        s.push(sum+nums[i])
        sum += nums[i];
    }
    return s;
};
runningSum([1,2,3,4])