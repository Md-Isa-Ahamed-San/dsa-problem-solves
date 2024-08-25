//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cPlusEqual = (pages, arr) => {
//   console.log(pages, arr);
  let start = 0;
  while (pages > 0) {
    pages -= arr[start];
    start++;
    if (pages <= 0) {
        console.log(start);
        break;
    }
    if (start >= arr.length) {
      start = 0;
    }
  }
};
const handleTestCases = () => {
  rl.question("", pages => {
    pages = parseInt(pages);
    let count = 0;
    const handleInput = () => {
      rl.question("", input => {
        const arr = input.split(" ").map(Number);
        cPlusEqual(pages, arr);
        count++;
      });
    };
    handleInput();
  });
};
handleTestCases();
