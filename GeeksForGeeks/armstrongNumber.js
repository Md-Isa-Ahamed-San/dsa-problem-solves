let armstrongNumber = n => {
  let y = n.toString().length;
  let x = n;
  let sum = 0;
  while (x > 0) {
    sum = sum + (x % 10) ** y;
    x = Math.floor(x / 10);
  }

 return  sum === n ? "Yes" : "No";
};

armstrongNumber(153);
