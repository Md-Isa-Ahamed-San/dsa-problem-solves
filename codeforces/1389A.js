const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var lcmProblem = (a, b) => {
  if(2*a<=b){
    console.log( a,2*a)
    return
  }
  console.log(-1,-1);
  return
};
const handleTestCases = () => {
  rl.question("", (testCase) => {
      testCase = parseInt(testCase);
      let count = 0;
      const handleInput = () => {
          rl.question("", (input) => {
              const [a, b] = input.split(" ").map(Number);
              lcmProblem(a,b)
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
// lcmProblem(13, 37);
// lcmProblem(1, 1337);
// lcmProblem(13,69);
// lcmProblem(88,89);
