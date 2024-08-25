var getCommonUsingTwoPointer = function (nums1, nums2) {
  let len = Math.max(nums1.length, nums2.length);
  let i = 0;
  let j = 0;
  while (true) {
    if (nums1[i] === undefined || nums2[j] === undefined) return -1;
    if (nums1[i] === nums2[j]) {
      //   console.log(nums1[i]);
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
};

// console.log(getCommon([1, 2, 3], [1, 3, 4, 5]));

console.log(
  getCommon(
    [
      5, 15, 16, 20, 22, 39, 43, 44, 44, 55, 61, 62, 62, 64, 72, 73, 81, 88, 90,
      95,
    ],
    [
      2, 8, 9, 11, 12, 13, 26, 29, 38, 49, 50, 51, 58, 63, 67, 72, 75, 82, 92,
      96,
    ]
  )
);
// console.log(getCommon([1,1,2], [2, 4]));
