var intersection = function (nums1, nums2) {
  let hashSetOfNums1 = new Set(nums1);

  let newArr = [];
  for (let i = 0; i < nums2.length; i++) {
    if (hashSetOfNums1.has(nums2[i])) {
      newArr.push(nums2[i]);
      hashSetOfNums1.delete(nums2[i]);
    }
  }
  console.log(newArr);
  return newArr;
};
intersection([1, 2, 2, 1], [2, 2]);
