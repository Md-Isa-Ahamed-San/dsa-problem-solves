const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var bobLimakWeight = (a) => {
    let count = 0;
    while(a<=b){
        count++;
        a = a*3;
        b= b*2;
        // console.log(a,b)
    }
    console.log(count)
    return 0;
  
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a] = input.split(" ").map(Number);
      bobLimakWeight(a);
    });
  };
  handleInput();
};
handleTestCases();
