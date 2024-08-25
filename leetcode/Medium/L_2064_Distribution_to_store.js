var minimizedMaximum = function(n, quantities) {
    let low = 1;
    let high = Math.max(...quantities);
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let storeCovers = 0;
        for(let i = 0;i<quantities.length;i++){
            storeCovers += Math.ceil(quantities[i]/mid)
        }
        if(storeCovers<=n){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }
    // console.log(low,high)
    return low;
};
minimizedMaximum(7,[15,10,10])