const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let searhOfEasyPb = nums => {
 let isHard = false;
 for(let i = 0;i<nums.length;i++){
    if (nums[i] ===1){
        isHard = true;
        break;
    }
}
isHard? console.log("HARD") : console.log("EASY");

};



const handleTestCases = () => {
    rl.question("", (n) => {
      n = parseInt(n);
      rl.question("", (numsStr) => {
        let nums = numsStr.trim().split(" ").map(Number);
        // console.log(nums)
        let result = searhOfEasyPb(nums);
        // console.log(result);
        rl.close();
      });
    });
  };
  
  handleTestCases();