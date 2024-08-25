// good way
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let zero = 0;
  let maxLen = 0;
  let lenCount = 0;
  while (right < nums.length) {
    if (nums[right] === 1) {
      lenCount++;
      maxLen = Math.max(maxLen, lenCount);
      right++;
    } else if (nums[right] === 0 && zero < k) {
      zero++;
      lenCount++;
      maxLen = Math.max(maxLen, lenCount);
      right++;
    } else {
      while (zero >= k) {
        if (nums[left] === 0) {
          left++;
          zero--;
          lenCount--;
        } else {
          left++;
          lenCount--;
        }
      }
    }
  }
  // console.log(maxLen)
  return maxLen;
};
//best way
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let zero = 0;
  let maxLen = 0;
  let markLeft = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zero++;
    }
    if (zero > k) {
      if (nums[left] === 0) {
        zero--;
    }
    left++;
    }
    if (zero <= k) {
      const len = right - left + 1;
      maxLen = Math.max(len, maxLen);
    }
    right++;
  }
//   console.log(maxLen);
  return maxLen;
};

longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
