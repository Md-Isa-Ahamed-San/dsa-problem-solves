// var occurrencesOfElement = function(nums, queries, x) {
//     let map = new Map()
//     let count =1;
//     let arr =[]
//     for(let i = 0;i<nums.length;i++){
//       if(nums[i]===x){
//         map.set(count,i)
//         count++;
//       }
//     }
//     for(let i = 0;i<queries.length;i++){
//       if(map.has(queries[i])){
//         arr.push(map.get(queries[i]))
//       }
//       else arr.push(-1)
//     }
//     console.log(arr)
//     return arr;
// };

// better
var occurrencesOfElement = function (nums, queries, x) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      nums[i] = -1;
      nums[count] = i;
      count++;
    } else {
      nums[i] = -1;
    }
  }
  // console.log(nums)
  for (let i = 0; i < queries.length; i++) {
    if (nums[queries[i] - 1] !== -1 && nums[queries[i] - 1] !== undefined) {
      arr.push(nums[queries[i] - 1]);
      // console.log(nums[queries[i]-1])
    } else arr.push(-1);
  }
  // console.log(arr)
  if (arr.length === 0) return [-1];
  return arr;
};
// occurrencesOfElement([1,3,1,7],[1,3,2,4],1)
// occurrencesOfElement([1, 2, 3], [10], 5);
occurrencesOfElement([1, 3, 2, 2, 3, 3, 1, 3, 1], [1, 4, 1], 3);
