//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = (x, y, z) => {
//   console.log(x, y, z);
  let max = Math.max(x,y,z);
  let min = Math.min(x,y,z)
  
  if (x === y && x === z) {
    console.log("YES");
    console.log(x, y, z);
    return;
  } else if (x !== y && x !== z && y !== z) {
    console.log("NO");
    return;
  }
  else if((max === x && max ===y) || (max === x && max ===z) ||(max === z && max ===y) ){
    console.log("YES");
    console.log(min,min,max)
    return;
  }
  else console.log("NO")
};
const handleTestCases = () => {
  rl.question("", (testCase) => {
    testCase = parseInt(testCase);
    let count = 0;
    const handleInput = () => {
      rl.question("", (input) => {
        const [x, y, z] = input.split(" ").map(Number);
        theFunctions(x, y, z);
        count++;
        if (count < testCase) {
          handleInput();
        } else {
          rl.close();
        }
      });
    };
    handleInput();
  });
};
handleTestCases();
