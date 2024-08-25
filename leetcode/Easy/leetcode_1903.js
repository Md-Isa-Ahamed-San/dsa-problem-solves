var largestOddNumber = function (num) {
  
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 !== 0) {
    //   console.log(i);
    //   console.log(num.slice(0, i + 1));
      return num.slice(0, i + 1)
    }
  }
  return ""
};
largestOddNumber("354272");
