var countWords = function (words1, words2) {
  let count = 0;
  let map = new Map();
  let map2 = new Map();
  for (let i = 0; i < words1.length; i++) {
    map.set(words1[i], (map.get(words1[i]) || 0) + 1);
  }
  for (let i = 0; i < words2.length; i++) {
    map2.set(words2[i], (map2.get(words2[i]) || 0) + 1);
  }
  for (let word of words1) {
    console.log(words1[word])
    if (map.get(word) === 1 && map2.get(word) === 1) {
      count++;
    }
  }
//   console.log(count);
  return count;
};
countWords(
  ["leetcode", "is", "amazing", "as", "is"],
  ["amazing", "leetcode", "is"]
);
