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
      }
      exp = exp / 2n;
      base = (base * base) % mod;
    }
    return result;
  }

  let evenPower = BigInt(n) / 2n + (BigInt(n) % 2n);
  let oddPower = BigInt(n) / 2n;

  let evenResult = modPow(5n, evenPower, MOD);
  let oddResult = modPow(4n, oddPower, MOD);

  return ((evenResult * oddResult) % MOD).toString();
};
