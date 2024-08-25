var maximumGain = function (s, x, y) {
  let firstCheck;
  let firstCheckVal;
  let secondCheck;
  let secondCheckVal;
  let sum = 0;
  if (x > y) {
    firstCheck = "ab";
    firstCheckVal = x;
    secondCheck = "ba";
    secondCheckVal = y;
  } else {
    firstCheck = "ba";
    firstCheckVal = y;
    secondCheck = "ab";
    secondCheckVal = x;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1] === firstCheck[0] &&
      s[i] === firstCheck[1]
    ) {
      stack.pop();
      sum += firstCheckVal;
    } else {
      stack.push(s[i]);
    }
  }
  let newS = stack.join("");
  stack = [];
  for (let i = 0; i < newS.length; i++) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1] === secondCheck[0] &&
      newS[i] === secondCheck[1]
    ) {
      stack.pop();
      sum += secondCheckVal;
    } else {
      stack.push(newS[i]);
    }
  }
  // console.log(newS)
  return sum;
};
// console.log(maximumGain("cdbcbbaaabab", 4, 5));
// console.log(maximumGain("aabbaaxybbaabb", 5, 4));
// aaxybb;
// 5 5 5 5
