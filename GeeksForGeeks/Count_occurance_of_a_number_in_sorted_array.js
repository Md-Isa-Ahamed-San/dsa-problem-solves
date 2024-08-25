function count(arr, n, x) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // console.log(low,high)
  const endIdx = high;
  // console.log("🚀 ~ count ~ startIdx:", startIdx)
  low = 0;
  high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  const startIdx = low;
  // console.log("🚀 ~ count ~ start & endIdx:", startIdx,endIdx)
  // console.log(low,high)
  console.log(endIdx - startIdx + 1);
}
// count([1, 1, 2, 2, 2, 2, 3], 7, 2);
count([1, 1, 2, 2, 2, 2, 3], 7, 4);
