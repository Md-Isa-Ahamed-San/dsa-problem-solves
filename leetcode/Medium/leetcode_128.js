var longestConsecutive = function (nums) {
  let newObj = {};
  let max = -Infinity;
  let count = 0;
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newObj[nums[i]] = (newObj[nums[i]] || 0) + 1;
  }
  console.log(newObj);
  for (let item in newObj) {
    newArr.push(parseInt(item));
  }
  console.log(newArr);
  if (newArr.length < 1) return nums;
  if (newArr.length === 1){
    console.log(1)
    return 1;
  } 
  for (let i = 1; i < newArr.length; i++) {
    if ( Math.abs(Math.abs(newArr[i]) - Math.abs(newArr[i - 1])) === 1) {
      count++;
    } else if (newArr[i] - newArr[i - 1] !== 1) {
      if (max < count) {
        max = count;
        count = 0;
      }
    }
    if (max < count) {
      max = count;
    }
  }
  console.log(max + 1);
  return max + 1;
};
// longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
// longestConsecutive([100, 4, 200, 1, 3, 2]);
// longestConsecutive([0]);
// longestConsecutive([0,1]);
// longestConsecutive([0, 0]);
// longestConsecutive([0, -1]);
longestConsecutive([1,0,-1]);
