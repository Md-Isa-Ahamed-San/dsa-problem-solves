var longestPalindrome = function (s) {
    if (s.length === 1) return 1;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let oddCount = 0;
    let evenCount = 0;
    let total = 0;
    map.forEach(item => {
      console.log(item);
      item % 2 !== 0 ? oddCount++ : evenCount++;
      total += item;
    });
    if (oddCount > 1) {
      return s.length - oddCount + 1;
    }
    return s.length;
  };