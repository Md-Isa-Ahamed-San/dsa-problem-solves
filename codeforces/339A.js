const readline = require("readline");
     
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
var helpfulMath = (s) => {
    let newArr = s.split("+")
    newArr.sort((a,b)=> parseInt(a)-parseInt(b))
//    console.log(newArr)
   let newStr = newArr.join("+")
   
   console.log(newStr)
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const [a] = input.split(" ").map(String);
      helpfulMath(a);
      rl.close();
    });
  };
  handleInput();
};
handleTestCases();