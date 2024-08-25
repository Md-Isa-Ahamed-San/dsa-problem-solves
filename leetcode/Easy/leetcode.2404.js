var mostFrequentEven = function (nums) {
  let frequencyTable = {};

  for (let num of nums) {
    if (num % 2 === 0) {
      frequencyTable[num] = (frequencyTable[num] || 0) + 1;
    }
  }

  console.log(frequencyTable);
let idx = 0;
let idxValue = 0;
  for(let i in frequencyTable){
// console.log(frequencyTable[i])
if(frequencyTable[i]>idxValue){
    idxValue = frequencyTable[i]
    idx=i
}
  }
  if(idxValue <1) return -1
//   console.log("index:",idx, "value is :",idxValue)
  return idx
};

mostFrequentEven([0, 1, 2,2,2,2]);
