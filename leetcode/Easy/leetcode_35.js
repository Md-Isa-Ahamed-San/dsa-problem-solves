var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length;
  -1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid]===target){
      console.log(mid)
      return mid;
    }
    if(nums[mid]<target){
      low = mid+1;
    }
    else{
      high = mid-1;
    }
  }
  console.log(low)
  return low;
};
searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 7], 6);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1], 1);
searchInsert([1, 3], 2);
searchInsert([1, 3,5], 4);
searchInsert([-1,3,5,6], 0);
