var reverse = function (x) {
  let isNeg = x < 0 ? true : false;
  let y = Math.abs(x);
  let reverseNumber = 0;
  while (y > 0) {
    reverseNumber = reverseNumber * 10 + (y % 10);
    y = Math.floor(y / 10);
  }
  if (reverseNumber > 2 ** 31 - 1) {
    reverseNumber = 0;
  }
  console.log(reverseNumber);

  return isNeg ? -1 * reverseNumber : reverseNumber;
};

// reverse(1534236469);
reverse(1563847412);
// reverse(-123);
// reverse(121);
