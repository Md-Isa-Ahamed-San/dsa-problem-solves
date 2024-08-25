const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let luckyNum = val => {
    // console.log(typeof(val[0]));
  let value = val;
    // console.log(value)
  let luckyCount = 0;

  //   console.log(value.length)
  for (let i = 0; i < value.length; i++) {
    // console.log(value[i])
    if (parseInt(value[i]) === 7 || parseInt(value[i]) === 4) {
      ++luckyCount;
    }
  }
//   console.log(luckyCount)
  if (luckyCount === 4 || luckyCount === 7) {
    console.log("YES");
  } else console.log("NO");
};

const handleTestCases = () => {
  rl.question("", valStr => {
    let val = valStr.trim().split(" ").map(String).toString();
    //here first the trim() will remove the white spaces then it will split the val and then map it into string and finally make the valStr into string using toString()
    // console.log(val)
    console.log("g: ",val);
    let result = luckyNum(val.toString());
    rl.close();
  });
};

handleTestCases();
