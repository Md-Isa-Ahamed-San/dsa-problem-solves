var intersect = function (nums1, nums2) {
  let mapNums1 = new Map();
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    mapNums1.set(nums1[i], (mapNums1.get(nums1[i]) || 0) + 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (mapNums1.get(nums2[i]) > 0) {
      ans.push(nums2[i]);
      //   console.log(mapNums1, ans);

      mapNums1.set(nums2[i], mapNums1.get(nums2[i]) - 1);
    }
  }
  //   console.log(ans);
  return ans;
};

intersect([4, 9, 5], [9, 4, 9, 8, 4]);
