var rotate = function (nums, k) {
    const newArr = []
    if(k>=nums.length){
        k = k%nums.length
        console.log(k)
    }
    if(nums.length<= 1) return nums
    for (let i = 0; i < k; i++) {
      let removedNumber = nums.pop();
      newArr.unshift(removedNumber);
    }
    nums.unshift(...newArr)
    console.log(nums)
    return nums
  };
//   rotate([-1], 2);
  rotate([1,2], 3);