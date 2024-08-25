let fourSum = (nums, target) => {
  let arr = nums.sort((a, b) => a - b);
  let n = arr.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j != i + 1 && arr[j] === arr[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum === target) {
          set.add([arr[i], arr[j], arr[k], arr[l]].join(","));
          k++;
          l--;
        } else if (sum > target) l--;
        else k++;
      }
    }
  }
  // console.log(set)
  return Array.from(set, str => str.split(",").map(Number));
};

// console.log(fourSum([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], 8));
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
