var subnumsaySum = function (nums, k) {
  if (nums.length == 1 && nums[0] !== k) {
    return 0;
  }

  let n = nums.length;
  let sum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    let remove = sum - k;

    if (map.get(remove) !== undefined) {
      count += map.get(remove);
    }
    
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  // console.log(map);

  return count;
};

// console.log(subnumsaySum([1, 2, 1, 2, 1], 3));
// console.log(subnumsaySum([1, 1, 1], 2));
// console.log(subnumsaySum([1], 7));
// console.log(subnumsaySum([-1,-1,1], 0));
console.log(subnumsaySum([1, -1, 0], 0));
// console.log(subnumsaySum([1,-1,0], 0));
// console.log(subnumsaySum([3, -3, 1,1,1], 3));
// console.log(subnumsaySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));
// console.log(subnumsaySum([1, 2, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 4, 2, 3], 3));
// console.log(subnumsaySum([6],  28));
// console.log(
//   subnumsaySum(
//     [
//       -7, 8, 6, 0, -4, -5, -8, 3, 0, 10, 5, -8, 3, 5, -7, 6, 8, -5, 2, -8, 9,
//       -2, -8, -9, -2, 9, 5, -6, -1, -10, 8, -1, -9, -2, -10, 7, 4, -3, 5, -10,
//       5, -8, 10, -6, 3, -8, 10, 7, -5, -9,
//     ],
//     -11
//   )
// );
// subnumsaySum([1,2,3,4,5,6,7,8,9,10], 15);
// subnumsaySum([1,2,3,7,5], 12);
// console.log(subnumsaySum([0], 0));
// console.log(subnumsaySum([0], 1));
// subnumsaySum([1,1,1], 2);
