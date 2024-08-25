// var majorityElement = function(nums) {
//     let obj = {}
//     let me = new Set()
//     for(let i = 0;i<nums.length;i++){
// obj[nums[i]] = (obj[nums[i]] || 0 )+1;
// if(obj[nums[i]] > Math.floor(nums.length/3)){
//     me.add(nums[i])
// }
//     }
//     // console.log(me)
//     return [...me]
// };
var majorityElement = function (nums) {
  let countElement1 = 0;
  let countElement2 = 0;
  let element1 = -1;
  let element2 = -2;
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (countElement1 === 0 && element2 !== nums[i]) {
      element1 = nums[i];
      countElement1++;
    } else if (countElement2 === 0 && element1 !== nums[i]) {
      element2 = nums[i];
      countElement2++;
    } else if (nums[i] === element1) {
      countElement1++;
    } else if (nums[i] === element2) {
      countElement2++;
    } else {
      countElement1--;
      countElement2--;
    }
    // console.log(countElement1, countElement2);
  }
  countElement1 = 0;
  countElement2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === element1) countElement1++;
    else if (nums[i] === element2) countElement2++;
  }
  if (countElement1 > Math.floor(n / 3) && countElement2 > Math.floor(n / 3))
    return [element1, element2];
  if (countElement1 > Math.floor(n / 3) && !(countElement2 > Math.floor(n / 3)))
    return [element1];
  if (!(countElement1 > Math.floor(n / 3)) && countElement2 > Math.floor(n / 3))
    return [element2];

  return []
};
console.log(majorityElement([1,2,3]));
// console.log(majorityElement([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 5, 5, 4, 3, 7]));
