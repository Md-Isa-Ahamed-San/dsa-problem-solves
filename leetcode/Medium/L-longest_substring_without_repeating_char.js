var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let map = new Map();
  let left = 0;
  let right = 0;
  while (right < s.length) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
      map.set(s[right], right);
      maxLen = Math.max(right - left + 1, maxLen);
    } else {
      map.set(s[right], right);
      maxLen = Math.max(right - left + 1, maxLen);
    }
    right++;
  }
  // console.log(maxLen)
  return maxLen;
};
