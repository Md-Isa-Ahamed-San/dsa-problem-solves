var decodeString = function (s) {
  let stack = [];
  let len = s.length;
  let newStr = "";

  for (let i = 0; i < len; i++) {
    let tempStr = "";
    let tempNum = "";
    if (s[i] === "]") {
      while (stack[stack.length - 1] !== "[") {
        let str = stack.pop();
        tempStr += str;
      }

      stack.pop(); //popping [
      while (
        stack.length > 0 &&
        stack[stack.length - 1] >= "0" &&
        stack[stack.length - 1] <= "9"
      ) {
        tempNum += stack.pop();
      }

      tempStr = tempStr.split("").reverse().join(""); //reversing to get correct order
      tempNum = tempNum.split("").reverse().join(""); //reversing to get correct order
      tempStr = tempStr.repeat(parseInt(tempNum)); 
      tempStr = tempStr.split("");
      stack.push(...tempStr);
    } else {
      stack.push(s[i]);
    }
  }
  // console.log(newStr)
  // console.log(stack.join(""));
  return stack.join("");
};

// decodeString("10[a]2[bc]xy")
// decodeString("2[a2[cd]]");
// decodeString("3[a]2[bc]");
// decodeString("3[a2[c]]");
decodeString("2[abc]3[cd]ef");
