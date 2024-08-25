let aggressiveCows = (n, k, stalls) => {
  let arr = stalls.sort((a, b) => a - b);
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  if (k === 2) {
    console.log("ans: ", max - min);
    return max - min;
  }

  let low = 1;
  let high = max - min;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let cowCount = 1;
    let prevCow = 0;
    for (let j = 1; j < n; j++) {
      if (arr[j] - arr[prevCow] >= mid) {
        cowCount++;
        prevCow = j;
      }
    }

    if (cowCount >= k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(high)
  return high;
};
aggressiveCows(6, 4, [4, 3, 0, 9, 10, 7]);
// aggressiveCows(5, 3, [10, 1, 2, 7, 5]);
// aggressiveCows(5, 3, [1, 2, 4, 8, 9]);
