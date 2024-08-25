const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var softDrinking = (a, b, c) => {
    console.log(Math.max(a,b,c)-Math.min(a,b,c))
  
};

const handleInput = () => {
  rl.question("", input => {
    const [a, b, c] = input.split(" ").map(Number);
    softDrinking(a, b, c);
  });
};
handleInput();
