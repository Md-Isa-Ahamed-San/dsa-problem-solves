//with test cases
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions = s => {
//first letter is lower and rest of is upper then change
  if (
    (s[0] === s[0].toLowerCase() && s.slice(1) === s.slice(1).toUpperCase())
    
  ) {
    console.log(s[0].toUpperCase() + s.slice(1).toLowerCase());
  }
  else if(s === s.toUpperCase()){
    console.log(s.toLowerCase())
  }
   else {
    console.log(s);
  }

  //   console.log(s[0].toUpperCase() + ss.toLowerCase());
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      theFunctions(input);
    });
  };
  handleInput();
};
handleTestCases();
