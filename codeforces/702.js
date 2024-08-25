const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cPlusEqual = (a) => {
    let max= 0;
    let count =1;
   for(let i = 0;i<a.length;i++){
if(a[i]<a[i+1]){
    count++;
}
else{
    max = Math.max(count,max);
    count =1;
}
   }
   console.log(max)
};
const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                const a = input.split(" ").map(Number);
                if(a.length === testCase){
                    cPlusEqual(a);
                }
            });
        };
        handleInput();
    });
};
handleTestCases();
