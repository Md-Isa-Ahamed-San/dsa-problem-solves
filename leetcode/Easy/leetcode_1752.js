function isSorted(arr) {
  
}
var check = function (nums) {
  let theNumberIndex;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      decresedFrom = i + 1;
      theNumberIndex = i;
      // console.log(decresedFrom)
      break;
    }
  }
  // console.log(theNumberIndex)
//   console.log(theNumberIndex);
if(theNumberIndex!== undefined){
// console.log(nums.splice(theNumberIndex + 1))
    nums.unshift(...nums.splice(theNumberIndex + 1));
}
  console.log(nums)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
        console.log(i,i-1)
        console.log(nums[i],nums[i-1])
      console.log("f")
      return false;
    }
  }
  console.log("t")
  return true
};
// check([1,2,3]);
// check([2, 7, 4, 1, 2, 6, 2]);
// check([8, 5, 4, 5, 1, 4, 5, 2, 2]);
check([3, 4, 5, 1, 2]);
// check([3, 1, 2, 2, 4]);
