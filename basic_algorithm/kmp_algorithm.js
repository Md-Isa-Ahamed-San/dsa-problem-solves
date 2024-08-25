const partialMatchTable = pattern => {
  let j = 0;
  let patternTable = [0];

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[j]) {
      patternTable[i] = j + 1;
      ++j;
    } else {
      patternTable[i] = 0;
    }
  }
  console.log(patternTable);
  return patternTable;
};
const kmpAlgorithm = (text, pattern) => {
  const patternTable = partialMatchTable(pattern);
  let theIndex = 0;
  let j = 0;
  let foundPattern = false;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && pattern[j] !== text[i]) {
      j = patternTable[j - 1];
    }
    if (pattern[j] === text[i] && pattern.length >= j) {
      if (j === pattern.length - 1) {
        foundPattern = true;
        theIndex = i - pattern.length + 1;
      }
      j++;

      // j++;
      // if(j=== pattern.length){
      // in this case the value of j will be equal to pattern.length  because we are incrementing j++ first then checking so careful
      //   found = true
      //   theIndex = i-pattern.length+1
      // }
    }
  }
  console.log("found pattern : ", foundPattern);
  console.log("the index where the pattern start in text :", theIndex);
};
kmpAlgorithm("ababcabcabababd", "ababd");
// kmpAlgorithm("ababde", "ababd");
