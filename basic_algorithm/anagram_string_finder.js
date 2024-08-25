const validAnagram = (str1, str2) => {
  const str1CounterFre = {};
  const str2CounterFre = {};
  for (let item of str1) {
    str1CounterFre[item] = ++str1CounterFre[item] || 1;
  }
  for (let item of str2) {
    str2CounterFre[item] = ++str2CounterFre[item] || 1;
  }
  // console.log(str1CounterFre)
  // console.log(str2CounterFre)
  for (let item in str1CounterFre) {
    // console.log(str1CounterFre[item])
    if (str1CounterFre[item] !== str2CounterFre[item]) {
    //   console.log("false");
      return false;
    }
  }
//   console.log("true");
  return true;
};

validAnagram('','');
validAnagram('qwertyy','qeywrty');
validAnagram("carr", "rrat");
validAnagram('aaz','azz');
validAnagram('anagram','nagaram');
