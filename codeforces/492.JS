const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let canBuilt = num => {
  let n = 1
  let count = 0;
  while(true){
   num -= ((n*(n+1))/2)
   if(num<0){
    break;
   }
   count++;
   n++;
  }
  console.log(count)

};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      canBuilt(input);
      rl.close();
    });
  };

  handleInput();
};
handleTestCases();
