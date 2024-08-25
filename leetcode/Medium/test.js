var numSubarraysWithSum = function (nums, goal) {
  if(nums.length<=0 && nums[0]!==k) return 0;
  let map = new Map();
  let count=0;
  let sum = 0;
  map.set(0,1);
  for (let i = 0; i < nums.length; i++) {
    sum +=nums[i];
    let remind = sum-goal;
    if(map.has(remind)){
      count += map.get(remind);
    }
    map.set(sum,(map.get(sum)||0)+1)

  }
  // console.log(count)
  return count;
};
numSubarraysWithSum([1, 0, 1, 0, 1],2);
numSubarraysWithSum([0, 0, 0, 0, 0], 0);