
var combinationSum2 = function(arr,target) {
    let eachAnsComb = [];
    let answer=[]
    let arrr = arr.sort((a,b)=>a-b)
 function findAllPerSum(idx,arr,target,answer,eachAnsComb) {
   //base case
  
     if (target === 0) {
        // console.log(eachAnsComb);
        answer.push([...eachAnsComb])
     return;
     }
   for(let i = idx;i<arr.length;i++){
    //skipping duplicates
    if( i>idx && arr[i]==arr[i-1]) continue;
 // pruning: if arr[i] is greater than the remaining target, no need to call the recursion
   if(arr[i]>target) break;
   eachAnsComb.push(arr[i]);
   findAllPerSum(i+1,arr,target-arr[i],answer,eachAnsComb);
   eachAnsComb.pop();
   }
 }
 findAllPerSum(0,arrr,target,answer, eachAnsComb);
 return answer;
   
};