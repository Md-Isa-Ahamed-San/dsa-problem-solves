var minDays = function (bloomDay, m, k) {
  let flowerNeeded = m * k;
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  if (flowerNeeded > bloomDay.length) {
    return -1;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let flowerCount = 0;
    let bouquetCount = 0;
    console.log("mid: ", mid);
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= mid) {
        flowerCount++;
        if (flowerCount === k) {
          bouquetCount++;
          flowerCount = 0;
        }
      } else {
        flowerCount = 0;
      }
    }
    console.log(bouquetCount);
    if (bouquetCount >= m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    console.log(low, high);
  }
  return low;
};
// minDays([1, 10, 3, 10, 2], 3, 1);
// minDays([7, 7, 7, 7, 12, 7, 7], 2, 3);
minDays([7, 7, 7, 7, 13, 12, 7, 7], 2, 3);
