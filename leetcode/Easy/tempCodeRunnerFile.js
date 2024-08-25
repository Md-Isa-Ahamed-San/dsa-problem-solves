let bs = (arr,t)=>{
  let low = 0;
  let high = arr.length-1;
  while(low<=high){

    let mid = Math.floor((low+high)/2)
    if(t ===mid){
      console.log(arr[mid])
      return
    }
   else if(t<mid){
      high = mid-1;
    }
    else{
      low=mid+1;
    }
  }
 console.log(-1)
}
bs([1,2,3,4,5,6,7,8],9)