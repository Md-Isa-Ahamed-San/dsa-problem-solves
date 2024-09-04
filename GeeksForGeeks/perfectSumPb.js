function perfectSum(arr, sum, n) {
  let eachAnsComb = [];
  
  function findAllPerSum(idx, eachAnsComb, s, theSum, arr, n) {
    //base case
    if (idx === n) {
      if (theSum === s) {
        console.log(eachAnsComb);
      }
      return;
    }
    // console.log(idx)
    //picking
    eachAnsComb.push(arr[idx]);
    s += arr[idx];
    findAllPerSum(idx+1, [...eachAnsComb], s, theSum, arr, n);
    s -= arr[idx];
    eachAnsComb.pop();
    //not pick
    findAllPerSum(idx+1, eachAnsComb, s, theSum, arr, n);
  }
  findAllPerSum(0, eachAnsComb, 0, sum, arr, n);
}
perfectSum([1, 2, 1], 2, 3);
