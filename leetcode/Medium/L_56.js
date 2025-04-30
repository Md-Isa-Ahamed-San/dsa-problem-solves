const sort = (intervals) => {
  const sortedData = intervals.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });
  return sortedData;
};

var merge = function (intervals) {
  const data = sort(intervals);
//   console.log(" merge ~ data:", data);
  let ans = [data[0]];
  for (let i = 0; i < data.length; i++) {
    let currentInterval = data[i];
    let lastAns = ans[ans.length-1];
    if(currentInterval[0]<=lastAns[1]){
        lastAns[1]=Math.max(currentInterval[1],lastAns[1]);
    }
    else ans.push(currentInterval)
    // console.log(currentInterval,lastAns)
  }
  return ans
};
console.log(
  merge([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
    [5, 7],
  ])
);
