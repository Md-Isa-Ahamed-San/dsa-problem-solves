//with test cases 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunctions =(a,b) => {
    let first = Math.floor(a/b);
    // console.log(first)
    if(a<b){
        console.log(-1);
        return 0;
    }
    else{
        while(first%b!==0 || (2*first)<a){
                first++;
        }
    }
    console.log(first)
};
const handleTestCases = () => {
        const handleInput = () => {
            rl.question("", (input) => {
                const [a, b] = input.split(" ").map(Number);
                theFunctions(a, b);
            });
        };
        handleInput();
};
handleTestCases();
