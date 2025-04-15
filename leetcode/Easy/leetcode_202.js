var isHappy = function (n) {
  let sum = 0;

  //   let t = 5;
  while (true) {
    while (n > 0) {
      const lastDigit = n % 10;
      n = Math.floor(n / 10);
      sum += lastDigit * lastDigit;
      // console.log(sum)
    }
    console.log(sum);
    if (sum === 1) return true;
    if (sum < 10 && sum !== 7) return false;
    n = sum;
    sum = 0;
  }
};
var isHappy = function (n) {
  let seen = new Set();
  while (n != 1) {
    if (seen.has(n)) return false; //if same number appears again then its mean we are in loop so return false
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      const lastDigit = n % 10;
      n = Math.floor(n / 10);
      sum += lastDigit * lastDigit;
      // console.log(sum)
    }

    n = sum;
  }
  return true;
};
console.log(isHappy(1111111));
