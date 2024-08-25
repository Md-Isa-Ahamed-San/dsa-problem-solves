// better solution using map
// var threeSum = function (nums) {
//   let set = new Set();
//   // let thirdItem =
//   for (let i = 0; i < nums.length; i++) {
//     let map = new Map();
//     for (let j = i + 1; j < nums.length; j++) {
//       let thirdItem = parseInt(-(nums[i] + nums[j]));
//       if (map.has(thirdItem)) {
//         let arr = [nums[i], nums[j], thirdItem].sort((a, b) => a - b);
//         set.add(arr.join(","));
//       } else {
//         map.set(nums[j], nums[j]);
//       }
//     }

//   }
//   return Array.from(set, item=>item.split(",").map(Number))
// };

var threeSum = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let i = 0;
  // console.log(arr)
  let set = new Set();
  while (i < arr.length - 1) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      i++;
      continue;
    }
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] === 0) {
        let tempArr = [arr[i], arr[j], arr[k]];
        // console.log("🚀 ~ threeSum ~ tempArr:", tempArr.join(","));
        set.add(tempArr.join(","));
        j++;
        k--;
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
    i++;
  }
  // console.log(set);
  return Array.from(set, str => str.split(",").map(Number));
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
