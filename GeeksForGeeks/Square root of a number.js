function floorSqrt(x) {
  let low = 1;
  let high = x;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === x) {
      // console.log(mid)
      return mid;
    } else if (mid * mid < x) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  //   console.log(ans)
  return ans;
}
// floorSqrt(5);
floorSqrt(4);
