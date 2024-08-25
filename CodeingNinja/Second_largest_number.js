const Second_Largest_Number = (nums)=>{
let highest=-Infinity;
let secHighest = -Infinity;
let lowest = Infinity;
let secLowest = Infinity;
for(let i = 0;i<nums.length;i++){
    if(nums[i]>highest){ 
        secHighest = highest;
        highest = nums[i]
    }
    else if(nums[i]>secHighest && nums[i]!==highest){
        secHighest = nums[i]
    }

    if(nums[i]<lowest){
        secLowest = lowest
        lowest = nums[i]
    }
    else if(nums[i]<secLowest && nums[i]!==lowest){
        secLowest = nums[i]
    }
}


console.log(lowest,secLowest,highest,secHighest)
}
Second_Largest_Number([1,2,3,4,5,6,7])