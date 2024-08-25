function leaders(arr, n) {
  let newArr = [];
  let currentLeader = Number.MIN_SAFE_INTEGER;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= currentLeader) {
      newArr.push(arr[i]);
      currentLeader = arr[i];
    }
  }
//   console.log(newArr);
  return newArr.reverse()
  
}
console.log(leaders([10, 22, 12, 3, 0, 6], 6));
