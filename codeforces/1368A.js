const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cPlusEqual = (a,b,n) => {
    let count = 0;
    while(true){
        if(a<b){
            a+=b
        }
        else{
            b+=a;
        }
        count++;
        if(a>n ||b>n){
            break;
        }
    }
    console.log(count)
};
const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                const [a, b, c] = input.split(" ").map(Number);
                cPlusEqual(a, b, c);
                count++;
                if (count < testCase) {
                    handleInput();
                } else {
                    rl.close();
                }
            });
        };
        handleInput();
    });
};
handleTestCases();
