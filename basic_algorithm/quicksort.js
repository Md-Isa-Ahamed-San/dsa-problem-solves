const partition = (arr, start = 0, end = arr.length - 1) => {
  let pivotIdx = start;
  let pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
    // console.log(arr)
  }

  [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];
  //   arr[pivotIdx] = pivot

  console.log("pivotIdx: ", pivotIdx);
  //   console.log("new array: ", arr);
  return pivotIdx;
};
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
};
quickSort([3, 9, 4, 6, 1, 7, 8, 2, 8]);
