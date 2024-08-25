var countPrefixSuffixPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // console.log(words[i], "and " , words[j])
      if (words[i] === words[j]) {
        count++;
        console.log(count);
      } else if (words[i].length < words[j].length) {
        if (
          words[i] === words[j].slice(0, words[i].length) &&
          (words[i]===words[j].slice(words[j].length - words[i].length))
        ) {
          // console.log(words[i]," and ", words[j].slice(0, words[i].length))
          console.log(words[i], ' and1 ',words[j].slice(0, words[i].length))
          console.log(words[i], ' and2 ',words[j].slice(words[j].length-words[i].length))

          count++;
          console.log(count);
        }
      }
    }
    console.log(count);
  }
  return count;
};
// countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]);
countPrefixSuffixPairs(["a", "abb"]);
