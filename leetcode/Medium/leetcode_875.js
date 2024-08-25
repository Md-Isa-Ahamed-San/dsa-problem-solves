//brute force method
var minEatingSpeed = function(piles, h) {
    
    let maxElement = Math.max(...piles);
    console.log("\U0001f680 ~ minEatingSpeed ~ maxElement:", maxElement)
    
    for(let i = 1;i<=maxElement;i++){
        let sum = 0;
        for(let j = 0 ;j<piles.length;j++){
            sum+= Math.ceil(piles[j]/i);
        }
        console.log(sum,i)
        if(sum<=h){
            return i;
        }
    }
};
//optimized with binary search
var minEatingSpeed = function(piles, h) {
    
    let maxElement = Math.max(...piles);
    console.log("🚀 ~ minEatingSpeed ~ maxElement:", maxElement)
    let low = 0;
    let high = maxElement;
    let ans = 0;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let sum = 0;
        for(let j = 0 ;j<piles.length;j++){
            sum+= Math.ceil(piles[j]/mid);
        }
        console.log(sum,mid)
        //here mid is the number of banana koko will try to eat each hour and the sum is the hours 
        //needed to finish all the banana. so 
        if(sum<=h){
            ans = mid;
            console.log("ans: ",ans);
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }

    return ans;
};
// minEatingSpeed([3,6,7,11],8)
minEatingSpeed([30,11,23,4,20],5)