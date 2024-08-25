var findKthPositive = function (arr, k) {
  if (arr.length == 1) {
    if (arr[0] > k) {
      // console.log(k)
      return k;
    } else if (arr[0] === k) {
      // console.log(arr[0]+1)
      return arr[0] + 1;
    }

    // console.log(arr[0]+(k-(arr[0]-1)))
    return arr[0] + (k - (arr[0] - 1));
  }
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] - (mid + 1) < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(low, high);
  console.log(arr[high] - (high + 1));
  let missingNumbers = arr[high] - (high + 1);
  // console.log("🚀 ~ findKthPositive ~ missingNumbers:", missingNumbers)
  // here then the number is, arr[high] + k - missingNumbers
  // which is arr[high] + k - arr[high] + high+1
  // then the arr[high] cancels out and the formula becomes k +high +1;
  // where high +1 is equal to low; so the final fomula become low+k; here we must cancel out arr[high] because in some cases high can be negative value.
  // here we have to use the k+high+1 or low+k formula as the idx high can be -1
  // like this example [3,10], k=2. so we need to eleminate that arr[high] . so from next time we have to use this formula
  // console.log(arr[high]+ (k-missingNumbers))
  // console.log(low+k)
  // return arr[high] + (k-missingNumbers)
  console.log(low+k)
  return low + k;
};
// var findKthPositive = function (arr, k) {
//   let i = 0;
//   let theVal = k;

//   while(theVal>=arr[i]){
// i++;
// theVal++;
// }
// console.log(theVal)
// return theVal;
// };
// findKthPositive([2, 4, 5, 11,15], 4);
// findKthPositive([2,3,4,7,11], 5);
// findKthPositive([1,2], 2);
// findKthPositive([2,3], 1);
// findKthPositive([3, 10], 2);
// findKthPositive([2], 1);
// findKthPositive([2], 2);
