const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let canPlay = (num,cards) => {
  let canPlay = "NO"
  for(let i =0;i<cards.length;i++){
    if(num[0]=== cards[i][0] || num[1] === cards[i][1]){
        canPlay = "YES";
        break;
    }
  }
  console.log(canPlay)
  
};
const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", input => {
      const num = input;
      rl.question("", input => {
        const cards = input.split(" ").map(String);
        canPlay(num,cards);
        rl.close();
      });
    });
  };
  handleInput();
};
handleTestCases();
