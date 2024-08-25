var removeOuterParentheses = function (s) {
  let count = 0;
  let start = -1;
  let end = -1;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    //if count is 1 and char ( remove it
    //if count is 0 and char is ) remove it
    s[i] === "(" ? count++ : count--;
    if (!(count === 1 && s[i] === "(") && !(count === 0 && s[i] === ")")) {
      str = str + s[i];
    }
  }
  console.log(str);
  return str;
};
removeOuterParentheses("(()())(())(()(()))");
// removeOuterParentheses("(())()");
