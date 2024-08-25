var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  let startIdx = 0;
  let len = s.length;
  // console.log(s.splice(0,0))

  for (let i = 0; i < len; i++) {
    s = s + s.slice(startIdx, startIdx + 1);
    console.log(s);
    if (goal === s.slice(startIdx + 1)) {
      console.log("true");
      return true;
    }

    startIdx++;
  }
  console.log(s);
  console.log("false");
  return false;
};
// rotateString("abcde", "deabc");
rotateString("bbbacddceeb", "ceebbbbacdd");
