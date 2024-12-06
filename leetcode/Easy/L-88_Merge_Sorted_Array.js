var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j>=0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }

  }
//   console.log(nums1)
  return nums1;
};
merge([1, 5, 8, 0, 0, 0], 3, [1, 3, 7], 3);
