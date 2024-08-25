var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();
  for (let i = nums2.length-1; i >= 0; i--) {
    while (stack[stack.length - 1] < nums2[i] && stack.length>0) {
      stack.pop();
    }
    if (stack.length === 0) {
      map.set(nums2[i], -1);
      stack.push(nums2[i]);
      nums2[i] = -1;
    }
    else{
        map.set(nums2[i],stack[stack.length-1])
        stack.push(nums2[i])
    }
  }
  return nums1.map(item=>map.get(item))
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
