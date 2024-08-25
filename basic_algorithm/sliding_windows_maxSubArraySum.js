const maxSubArraySum = (arr, num) => {
  let maxSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let temp = maxSum;
  // console.log('max sum is: ',maxSum)
  let i = 0;
  for (let j = num; j < arr.length; j++) {
    // console.log('i: ', i, 'j: ', j)
    // console.log('arr[j] :', arr[j], 'arr[i] :', arr[i])
    temp = temp + arr[j] - arr[i];
    // console.log("temp max is ",temp)

    maxSum = Math.max(maxSum, temp);
    ++i;
  }
  console.log(maxSum);
  return maxSum;
};
// maxSubArraySum([1,2,5,2,8,1,5],2)
maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
