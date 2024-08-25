function NthRoot(n, m) {
  let low = 1;
  let high = m;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid ** n === m) {
    //   console.log(mid);
      return mid;
    } else if (mid ** n > m) {
      high = mid - 1;
    } else {
      low = mid + 1;
      // let ans = mid;
    }
  }
//   console.log(ans);
  return ans;
}
NthRoot(2, 9);
NthRoot(3, 9);
