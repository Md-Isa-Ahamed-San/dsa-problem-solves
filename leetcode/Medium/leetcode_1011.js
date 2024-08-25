var shipWithinDays = function (weights, days) {
  let high = weights.reduce((sum, currentVal) => {
    return sum + currentVal;
  });
  let low = Math.max(...weights);
//   console.log(low, high);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let load = 0;
    let daysRequired = 1;
    // console.log(low, high, mid);
    for (let i = 0; i < weights.length; i++) {
      if (load + weights[i] > mid) {
        daysRequired += 1;
        // console.log("sum after :", load);
        load = weights[i];
      } else {
        load += weights[i];
        // console.log("sum: ", load);
      }
      
    }
    // console.log(d);
    
    if (daysRequired <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(low);
  return low;
};
shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
