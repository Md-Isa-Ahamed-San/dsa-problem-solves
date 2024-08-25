const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (t) => {
  const testCaseCount = BigInt(t);
  let count = BigInt(0);
  const handleTestCases = () => {
    rl.question("", (input) => {
      const [row, col] = input.split(" ").map(BigInt);
      //adding an extra bigInt(1) to get ceiling mimics result
      //Let's illustrate with an example:
      //Suppose row = 5 and col = 3. The product row * col is 15.
      // In the original C++ code, (15 / 2) would yield 7 due to truncation,
      // which is correct for rounding up.
      // In JavaScript with BigInt, (15n / 2n) would yield 7n due to truncation.
      //  However, since we want to round up, we add 1 to the result before division:
      //   (15n + 1n) / 2n, which yields 8n, rounding up correctly.

      const ans = (row * col + BigInt(1)) / BigInt(2);
      console.log(ans.toString());
      count += BigInt(1);
      if (count < testCaseCount) {
        handleTestCases();
      } else {
        rl.close();
      }
    });
  };
  handleTestCases();
});
