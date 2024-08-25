var isPalindrome = function (s) {
  let newStr = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i].toLowerCase() >= "a" && s[i].toLowerCase() <= "z" )|| (s[i]>='0'&& s[i]<='9')) {
      newStr += s[i].toLowerCase();
    }
   
  }
//   console.log(newStr === newStr.split("").reverse().join(""))
  return newStr === newStr.split("").reverse().join("");
};
isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("0P");
