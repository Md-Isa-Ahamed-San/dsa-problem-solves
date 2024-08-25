let bookAllocation = (a, n, m) => {
  let arr = a;
  let low = Math.max(...arr);
  let high = arr.reduce((sum, current) => {
    return sum + current;
  }, 0);
  if (m > n) return -1;
//   console.log("🚀 ~ high ~ high:", high);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //mid is the number of pages we will try to assign each student and will see if every students get one of not at least
    let students = 1;
    let pages = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] + pages <= mid) {
        pages += arr[i];
      } else {
        pages = arr[i];
        students++;
      }
    }
    // console.log(students);
    if (students > m) {
      low = mid + 1;
      //if students becomes more than m thats mean we need to check with more pages
    } else {
      high = mid - 1;
    }
    console.log(low,high)
  }
  return low;
};
// bookAllocation([25, 46, 28, 49, 24], 5, 4);
bookAllocation([7, 2, 5, 10, 8],5, 2);
