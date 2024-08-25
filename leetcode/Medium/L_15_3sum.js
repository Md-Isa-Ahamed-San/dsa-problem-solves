var threeSum = function(nums) {
    let n = nums.length;
    let set = new Set()
    for(let i = 0;i<n;i++){
        for(let j = i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(nums[i]+nums[j]+nums[k] ===0){
                   let x= [nums[i],nums[j],nums[k]].sort((a,b)=> a-b)
                   set.add(x.join(","))
                }
            }
        }
    }
    return Array.from(set,x => x.split(",").map(Number))
  
};
console.log(threeSum([-1,0,1,2,-1,-4]))