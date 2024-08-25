var findRotation = function (arr) {
    if(arr[0]>arr[1]) {
      // console.log(1);
      return 1;
    }
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
      let mid = Math.floor((low+high)/2);
      if(arr[mid]>arr[mid+1]){
        // console.log(mid+1);
        return mid+1;
      }
      if(arr[mid]<arr[mid+1] && arr[mid]<arr[low]){
        high = mid-1;
      }
      else{
        low = mid+1;
      }
    }
    // console.log(0);
    return 0;
  };
  
  findRotation([5, 1, 2, 3, 4]);
  // findRotation([3,4,5, 1, 2]);
  // findRotation([ 1, 2,3,4]);
  