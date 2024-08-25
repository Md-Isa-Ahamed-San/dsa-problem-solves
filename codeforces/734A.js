//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (num, input) => {
  let countAnton = 0;
  while (num--) {
    if (input[num] === "A") {
      countAnton++;
    }
  }
  if(countAnton === input.length/2){
 console.log("Friendship");
 return;
  }
  countAnton > input.length/2 ? console.log("Anton") :console.log("Danik");

};
const handleTestCases = () => {
  rl.question("", num => {
    num = parseInt(num);

    const handleInput = () => {
      rl.question("", input => {
        theFunctions(num, input);
      });
    };
    handleInput();
  });
};
handleTestCases();
