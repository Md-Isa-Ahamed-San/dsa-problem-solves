const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var wrongSubs = (num, t) => {
  while (t--) {
   
    let numStr = num.toString();
    // numStr[numStr.length - 1] == 0 or
    if (num%10 == 0) {

      num = num / 10;
     
    } else {
      num--;
    }
  }
  console.log(num);
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a, b] = input.split(" ").map(Number);
      wrongSubs(a, b);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();
