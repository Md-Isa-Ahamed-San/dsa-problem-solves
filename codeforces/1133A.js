//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (input1, input2) => {
  //   console.log(input1, input2);
  let hoursOfInput1 = parseInt(input1.slice(0, 3));
  let hoursOfInput2 = parseInt(input2.slice(0, 3));
  let minOfInput1 = parseInt(input1.slice(3));
  let minOfInput2 = parseInt(input2.slice(3));

  let totmin = minOfInput1 + minOfInput2;
  let tothours = hoursOfInput1 + hoursOfInput2;

  if (tothours % 2 !== 0) {
    tothours -= 1;
    totmin += 60;
  }
  // console.log("🚀 ~ theFunctions ~ totmin:", totmin)
  // console.log("🚀 ~ theFunctions ~ tothours:", tothours)
  if (totmin / 2 >= 60) {
    totmin = (totmin % 60) / 2;
    tothours = tothours / 2 + 1;
  } else {
    tothours = tothours / 2;
    totmin = totmin / 2;
  }

//   console.log("🚀 ~ theFunctions ~ tothours:", tothours);
//   console.log("🚀 ~ theFunctions ~ totmin:", totmin);

  console.log(
    `${tothours < 10 ? "0" + tothours : tothours}:${
      totmin < 10 ? "0" + totmin : totmin
    }`
  );
};
const handleTestCases = () => {
  rl.question("", input1 => {
    const handleInput = () => {
      rl.question("", input2 => {
        const [a, b, c, d] = input2.split(" ").map(Number);
        theFunctions(input1, input2);
      });
    };
    handleInput();
  });
};
handleTestCases();
