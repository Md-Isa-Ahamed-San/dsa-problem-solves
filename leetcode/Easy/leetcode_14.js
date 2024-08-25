var longestCommonPrefix = function (strs) {
  let start = strs[0];
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
        if(start[i]!==strs[j][i]){
            if(count ===0) return ""
            console.log(count);
            console.log(start.slice(0,count))
            return start.slice(0,count);
        }
    }
    count++;
  }
  console.log(start)
  console.log(count)
  return start;
};
// longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["flow", "flow", "floo"]);
// longestCommonPrefix(["dog","racecar","car"]);

