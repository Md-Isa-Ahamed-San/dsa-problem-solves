const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var softDrinking = (n, k, l, c, d, p, nl, np) => {
  let totalDrinks = k * l;
  let totalToast = Math.floor(totalDrinks / nl);
  let totalLime = c * d;
  let totalSalt = p / np;
//   console.log("totalToast: ",totalToast)
//   console.log("totalLime:,",totalLime)
//   console.log("totalSalt:",totalSalt)
  let ans = Math.min(totalToast, totalLime, totalSalt) / n;
  console.log(Math.floor(ans));
};

const handleInput = () => {
  rl.question("", input => {
    const [n, k, l, c, d, p, nl, np] = input.split(" ").map(Number);
    softDrinking(n, k, l, c, d, p, nl, np);
  });
};
handleInput();

// lcmProblem(13, 37);
// lcmProblem(1, 1337);
// lcmProblem(13,69);
// lcmProblem(88,89);
