function findLongestConseqSubseq(arr, N) {
  let newArr = [];
  let count=0;
  let maxLen =0
  for (let i = 0; i < N; i++) {
    newArr[arr[i]] = 1;
  }
//   console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== 1){
          count=0;
        }
        else{
            count++;
        }
        maxLen = Math.max(count,maxLen)
    //   console.log(count,maxLen);
  }
  return maxLen;
}
console.log(findLongestConseqSubseq([2, 6, 1, 9, 4, 5, 3], 7));
console.log(findLongestConseqSubseq([1,9,3,10,4,20,2], 7));
console.log(findLongestConseqSubseq([0 ,1 ,1, 1 ,1, 1, 2], 7));
