var countGoodNumbers = function (n) {
  const MOD = 1000000007n;

  // Helper function for modular exponentiation
  function modPow(base, exp, mod) {
    if (exp === 0n) return 1n;
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
      if (exp % 2n === 1n) {
        result = (result * base) % mod;
        exp= exp-1n;
      }
      else{
        base = (base * base) % mod;
        exp = exp / 2n;
      }
    }
    return result;
  }

  let evenPower = BigInt(n) / 2n + (BigInt(n) % 2n);
  let oddPower = BigInt(n) / 2n;

  let evenResult = modPow(5n, evenPower, MOD);
  let oddResult = modPow(4n, oddPower, MOD);

  return ((evenResult * oddResult) % MOD).toString();

};
//here suppose the input is 4 in that case index will be 0,1,2,3,4 here the ans 
//will be 5^2(for even index) * 4^2(for odd index). which can be written as
// 5^n/2 * 5^n/2 which is equal to 20^n/2. so basically the ans will be 
//20^n/2 of even input and 20^n/2 * 5 for odd input. so we can do this also
//to solve this problem.