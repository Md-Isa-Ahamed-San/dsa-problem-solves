//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = nums => {
  let arr = [];
  let str = "";
  //   console.log(nums);
  for(let four =0;four<nums;four++){
    for(let seven =0;seven<nums;seven++){
      if(4*four + 7*seven > nums){
        break;
      }
      if(4*four + 7*seven === nums){
        // console.log(seven,four);
        str = "4".repeat(four) + "7".repeat(seven)
        console.log(str);
        return;
      }
    }
  }
  
  console.log(-1);
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const a = input.split(" ").map(Number);
      theFunctions(a[0]);
    });
  };
  handleInput();
};
handleTestCases();
