var isPossibleToSplit = function (nums) {
  let h = {};
  for (let i = 0; i < nums.length; i++) {
    h[nums[i]] = (h[nums[i]] || 0) + 1;
  }
  console.log(h);
  for(let item in h){
    if(h[item]>=3){
        console.log(h[item])
        console.log("false")
        return false
    } 
  }
  console.log("true")
  return true 
};
isPossibleToSplit([1,2 ,2, 3, 4, 5, 6]);
