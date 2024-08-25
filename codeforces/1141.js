//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
procedure:
first i have divided m/n.
if it get divided without reminder then
i tried to devide it with 3 if not then 2.
and each time count++ until the firstStepValue becomes 3 or 2.
*/
let game23 = (n, m) => {
  let count;
  //   console.log(n, m);
  let firstStepValue = m / n;
  if (m % n !== 0) {
    console.log(-1);
    return;
  }
  if (m % n === 0 && firstStepValue === 1) {
    console.log(0);
    return;
  } else {
    count = 1;
    while (true) {
    //   console.log(firstStepValue);
      if (firstStepValue === 2 || firstStepValue === 3) {
        break;
      }
      if (firstStepValue % 3 === 0) {
        firstStepValue = firstStepValue / 3;
        count++;
      } else if (firstStepValue % 2 === 0) {
        firstStepValue = firstStepValue / 2;
        count++;
      } else {
        console.log(-1);
        return;
      }
    }
    console.log(count);
  }
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a, b] = input.split(" ").map(Number);
      game23(a, b);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
