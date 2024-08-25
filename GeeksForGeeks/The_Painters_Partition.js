function minTime(arr, n, k) {
  let painters = k;
  let low = Math.max(...arr); //minimum time we have to assign to a worker as if we allocate less than the max element of the array then we cant allocate that value to any other
  let high = arr.reduce((sum, currentValue) => sum + currentValue, 0);
  //   console.log(low,high)
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let countPainter = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (sum + arr[i] <= mid) {
        sum += arr[i];
      } else {
        countPainter++;
        sum = arr[i];
      }
    }
    //   if we find countPainter === painters we cant just return the ans as the ans can be valid for less than mid also.
    //   if(countPainter=== painters){
    //     console.log(low,high,mid)
    //     return
    //   }
    if (countPainter <= painters) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    console.log(low, high);
  }
  return low;
}
minTime([1, 10, 3, 10, 2], 3, 1);
