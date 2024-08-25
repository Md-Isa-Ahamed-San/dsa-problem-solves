function maxLen(arr, n) {
  let len = 0;
  let map = new Map();
  let sum = 0;
  //    map.set(0,0)
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (!map.has(sum)) {
      map.set(sum, i);
    }
    if (sum === 0) {
      len = Math.max(len, i + 1);
    }
    if (map.has(sum)) {
      len = Math.max(len, i - map.get(sum));
    }

    // console.log(len);
  }
  //    console.log(map)
  return len;
}
// maxLen([2,2],2)
// maxLen([-2,2,-8,1,7,10,23],8)
// maxLen([15,-2,2,-8,1,7,10,23],8)
