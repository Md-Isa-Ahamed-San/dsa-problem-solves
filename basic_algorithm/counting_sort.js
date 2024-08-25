var sortArray = function (nums) {
    let ans = [];
    let map = new Map();
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    console.log(map);
    for (let i = min; i <= max; i++) {
      if (map.get(i) > 0) {
        for (let j = 0; j < map.get(i); j++) {
          ans.push(i);
        }
      }
    }
    return ans;
  };