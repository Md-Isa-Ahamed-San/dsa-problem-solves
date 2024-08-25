var pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = 0;
    let low = 0;
    let high = nums.length - 1;
  
    let leftSumArr = []
    let rightSumArr = []
    for(let i =0;i<nums.length;i++){
      leftSum+=nums[i]
      leftSumArr.push(leftSum)
      
    }
    for(let i =nums.length-1;i>=0;i--){
      rightSum+=nums[i]
      rightSumArr.push(rightSum)
    }
    console.log(leftSumArr)//     [2,4,6,12,11,19,23]
      console.log(rightSumArr)//  [4,12,11,17,19,21,23]
  //  console.log(leftSumArr)
  //  console.log(rightSumArr)
   while(low<=nums.length-1){
      if(leftSumArr[low]===rightSumArr[high]){
          return low;
      }
      low++;
      high--;
   }
  
     
    return -1;
  };
  console.log(pivotIndex([2, 2, 2, 6, -1, 8, 4]));