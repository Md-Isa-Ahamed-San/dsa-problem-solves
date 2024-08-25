const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let boringApartment = num => {
  let x = num[0]-1;
//   console.log(x)
  let n = num.length;
  let lastSum = ((n*(n+1))/2);
  console.log((x*10)+lastSum)
};
const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                
                boringApartment(input);
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
