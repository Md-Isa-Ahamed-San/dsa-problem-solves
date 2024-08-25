const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const foxAndSnake = (a, b) => {
  let hash = 0;
  for (let i = 0; i < a; i++) {
    if (i % 2 !== 0) {
      if (hash === 0) {
        hash = b - 1;
      } else {
        hash = 0;
      }
    }
    // console.log(hash);
    let line = "";
    for (let j = 0; j < b; j++) {
      if (i % 2 !== 0) {
        if (j === hash) {
          line += "#";
        } else {
          line += ".";
        }
      } else if (i % 2 === 0) {
        line += "#";
      }
    }
    console.log(line);
  }
};

const handleInput = () => {
  rl.question("", input => {
    const [a, b] = input.split(" ").map(Number);
    foxAndSnake(a, b);
  });
};
handleInput();

handleInput();
