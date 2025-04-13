var canConstruct = function (ransomNote, magazine) {
  const hash1 = {};
  const hash2 = {};
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    hash1[char] = hash1[char] ? hash1[char] + 1 : 1;
  }
  for (let j = 0; j < magazine.length; j++) {
    const char = magazine[j];
    hash2[char] = hash2[char] ? hash2[char] + 1 : 1;
  }
  for (let char in hash1) {
    if (hash1[char] > hash2[char] || !hash2[char] ) return false;
  }
  return true;
};
canConstruct("aa", "aab");
