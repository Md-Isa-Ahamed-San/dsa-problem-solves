var combinationSum = function(arr,target) {
    let eachAnsComb = [];
    let answer=[]
 function findAllPerSum(idx,arr,target,answer,eachAnsComb) {
   //base case
   if (idx === arr.length) {
     if (target === 0) {console.log(eachAnsComb);
       answer.push([...eachAnsComb])
     }
     return;
   }
   //picking
   if(arr[idx]<=target){
   eachAnsComb.push(arr[idx]);
   findAllPerSum(idx,arr,target-arr[idx],answer,eachAnsComb);
   eachAnsComb.pop();
   }
   //not pick
   findAllPerSum(idx+1,arr,target,answer,eachAnsComb);
 }
 findAllPerSum(0,arr,target,answer, eachAnsComb);
 return answer;
   
};