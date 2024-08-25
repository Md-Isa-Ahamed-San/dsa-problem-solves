//brute force
// var checkSubarraySum = function (nums, k) {
// //   let sum = 0;
//   let low = 0;
//   let map = new Map();
//   let len = 0;

//   if (nums.length === 1 && nums[0] !== k) {
//     return false;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     let count =0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       count++
//       if (sum % k === 0 && count > 1) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
//prefix sum
var checkSubarraySum = function(nums, k) {
  let sum = 0;
  let map = new Map();
  map.set(0, -1); // base case: sum 0 at index -1

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remainder = sum % k;
    if (map.has(remainder)) {
      if (i - map.get(remainder) > 1) return true;
    } else {
      map.set(remainder, i);
    }
  }
  return false;
};
//sliding window
var checkSubarraySum = function (nums, k) {
  //   let sum = 0;
  //   let low = 0;
  let map = new Map();
  let len = 0;
  let sum = 0;

  if (nums.length === 1 && nums[0] !== k) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] === 0 && nums[i + 1] === 0) return true;
    let low = 0;
    let oldSum = sum;
    if (sum === k && i > 0) return true;
    while (sum >= k) {
      if (sum % k === 0 && i - low > 0) return true;
      sum -= nums[low];
      low++;
    }
    sum = oldSum;
  }
  return false;
};
console.log(checkSubarraySum([1, 2, 3], 5));
// console.log(checkSubarraySum([23,2,4,6,6], 7));
// console.log(checkSubarraySum([1,1], 1));
// console.log(checkSubarraySum([23,2,6,4,7],6))
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
// console.log(checkSubarraySum([5,0,0,0], 3));
// console.log(checkSubarraySum([1, 3, 6, 0, 9, 6, 9], 7));
