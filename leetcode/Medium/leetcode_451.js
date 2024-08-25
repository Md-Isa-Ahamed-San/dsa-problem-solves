var frequencySort = function (s) {
  let hObj = {};
  for (let i = 0; i < s.length; i++) {
    hObj[s[i]] = (hObj[s[i]] || 0) + 1;
  }
  // hObj.forEach(({k,j}) => console.log(k,j))
  let result = "";
  Object.entries(hObj).sort(([,valA],[,valB])=> valB-valA)
  .forEach(([key,value])=> result += key.repeat(value))
//  console.log( Object.entries(hObj).sort(([,valA],[,valB])=> valB-valA))
  console.log(result);
  return result;
};
// frequencySort("ccccccaaaabbbabaddddddddddd");
frequencySort("2a554442f544asfasssffffasss");
