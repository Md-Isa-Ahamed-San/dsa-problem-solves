var subarraysDivByK = function (nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remind = sum % k;
    if (remind < 0) {
      remind += k;
    }
    if (map.has(remind)) {
      count += map.get(remind);
    }

    map.set(remind, (map.get(remind) || 0) + 1);
  }
  return count;
};
console.log(subarraysDivByK([1, -10, 5], 9));
console.log(subarraysDivByK([1, 2, 3, 1], 3));
console.log(subarraysDivByK([2, -2, 2, -4], 6));
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([7, 4, -10], 5));
