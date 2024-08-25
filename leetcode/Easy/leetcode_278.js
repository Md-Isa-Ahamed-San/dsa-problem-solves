var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1;
    let high = n;
    let ansIdx = null;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (isBadVersion(mid)) {
        ansIdx = mid;
        high = mid - 1;
      } else {
        // ansIdx = mid;
        low = mid + 1;
      }
    }
    return ansIdx;
  };
};
