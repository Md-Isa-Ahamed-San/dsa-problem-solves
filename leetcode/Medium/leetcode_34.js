var searchRange = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let lowerBoundIdx = -1;
  let higherBoundIdx = -1;
  //finding lowerBound
  if(nums.length ===1){
    if(target === nums[0]){
      return [0,0] 
    }
    return [-1,-1]
  }
  while (low <= high) {
    // console.log(lowerBoundIdx)
    let mid = Math.floor((low + high) / 2);
    // console.log(mid);
    if (nums[mid] >= target) {
      lowerBoundIdx = mid
      console.log("🚀 ~ searchRange ~ lowerBoundIdx:", lowerBoundIdx)
      
      high = mid-1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    }
    // console.log("lb:",lowerBoundIdx)
  }
 
    low =0;
    high = nums.length-1;
    // console.log(low,high)
    //finding higherBound;
    while(low<=high){
      // console.log(low,high)
      let mid = Math.floor((low+high)/2);
      if(nums[mid]<= target){
          low = mid+1;
          higherBoundIdx = mid
          console.log("🚀 ~ searchRange ~ higherBoundIdx:", higherBoundIdx)
      }
      else{
          high = mid-1;
      }

    }
    //if we dont find the target the lowerBoundIdx becomes higherBoundIdx vice versa
    console.log("l:",lowerBoundIdx);
    console.log("h: ",higherBoundIdx);
  if(nums[lowerBoundIdx]!== target) {
    lowerBoundIdx = -1
  }
  if(nums[higherBoundIdx]!== target) {
    higherBoundIdx = -1
  };
  return ([lowerBoundIdx, higherBoundIdx])
}
// console.log(searchRange([4,4,4,4,5,5, 7, 7, 8, 8, 8, 8, 8, 8, 10], 6));
// console.log(searchRange([5,7,7,8,8,10],5 ));
console.log(searchRange([5,7,7,9,9,10],8 ));
// console.log(searchRange([1,1],1 ));
// console.log(searchRange([1,4],4 ));
