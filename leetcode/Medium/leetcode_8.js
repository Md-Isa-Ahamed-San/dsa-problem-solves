var myAtoi = function (s) {
//   s = s.replace(/\s+/g, "");
//   console.log(s);
  let isNeg = false;
  let num = 0;
  let j = 0;
  if (s[0] === "-") {
    ++j;
    isNeg = true;
  } else if (s[0] === "+") {
    ++j;
  }
  if(s[1]===0) return 0
  for (let i = j; i < s.length; i++) {

    if (s[i] - "0" >= 0 && s[i] - "0" <= 9) {
      if (num === 0) {
        num = s[i];
      } else {
        num = num * 10 + (s[i] - "0");
      }
      //   console.log(num);
    }
    else if(s[i]-'0'==32 ){
        return num
    }
     else if (num > 2 ** 31 - 1 && !isNeg) {
      return 2 ** 31 - 1;
    } else if (num > 2 ** 31 - 1 && isNeg) {
      return "-" + 2 ** 31;
    } else if (isNeg && num > 0){
        console.log("-" + num);
        return "-"+num
    }
    else {
    //   console.log(num);
      return num;
    }
  }

  if (num > 2 ** 31 - 1 && !isNeg) {
    return 2 ** 31 - 1;
  } else if (num > 2 ** 31 - 1 && isNeg) {
    return "-" + 2 ** 31;
  }
  if (isNeg) {
    return "-" + num;
  }
  return num;
};
// console.log(myAtoi("-83472332"));
// console.log(myAtoi("91283472332"));
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("-+12"));
// console.log(myAtoi("+1"));
console.log(myAtoi("  -0012a42"));
console.log(myAtoi("   +0 123"));
