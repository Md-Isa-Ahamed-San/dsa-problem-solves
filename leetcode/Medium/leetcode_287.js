// var findDuplicate = function (nums) {

//   let theNums = nums.sort((a,b)=>a-b)
//   for (let i = 1; i < nums.length; i++) {
//     if(theNums[i]===theNums[i-1]){
//         return theNums[i]
//     }
//   }
// };
var findDuplicate = function (nums) {

 let slow = nums[0];
 let fast= nums[0];
do{
slow = nums[slow];
fast = nums[nums[fast]];
// console.log(slow,fast)
 }
 while(slow!==fast);

 fast = nums[0];
 while(fast!==slow){
    fast = nums[fast];
    slow = nums[slow];
// console.count('a')
 }
return slow;
};
console.log(findDuplicate([1, 3, 4, 2, 6,7,2,1,8]));
