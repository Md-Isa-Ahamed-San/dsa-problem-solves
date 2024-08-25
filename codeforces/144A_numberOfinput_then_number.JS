const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrivalOfTheGeneral = nums => {
  let maxIdx = 0;
  let minIdx = 0;
  let totalIdx = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[minIdx]) {
      minIdx = i;
    } else if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }
//   console.log(minIdx, maxIdx);
  let totalStep = totalIdx - minIdx + maxIdx;

  if (minIdx < maxIdx) {
      totalStep-= 1;
    }
    console.log(totalStep);

};
// arrivalOfTheGeneral([10, 10, 58, 31, 63, 40, 76]);


const handleTestCases = () => {
    rl.question("", (n) => {
      n = parseInt(n);
      rl.question("", (heightsStr) => {
        let heights = heightsStr.trim().split(" ").map(Number);
        console.log(heights)
        let result = arrivalOfTheGeneral(heights);
        // console.log(result);
        rl.close();
      });
    });
  };
  
  handleTestCases();