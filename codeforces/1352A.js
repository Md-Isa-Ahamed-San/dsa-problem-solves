const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sumOfRoundNumbers = num => {
  // console.log(num.toString().length);
  let len = num.toString().length
  let t =0
  let arr=[]
  let count = 0
  for (let i = 0; i<len ;i++) {
    
    t = 10**i
    // console.log(t)
    // if (num <= 0) return;
    let newNum = num % 10;
    if(newNum!==0){
      newNum = newNum * t
      count++
      arr.push(newNum)
    }
    // console.log("newNum:", newNum);
    num = parseInt(num / 10);
    // console.log("num:", num);
  }
  console.log(count)
  console.log(arr.join(' ') + '\n');
  //join the element by a single space
};
// sumOfRoundNumbers(9876)
// sumOfRoundNumbers(5009);
// sumOfRoundNumbers(1);





const handleTestCases = () => {
    rl.question("", (testCase) => {
        testCase = parseInt(testCase);
        let count = 0;
        const handleInput = () => {
            rl.question("", (input) => {
                const [a] = input.split(" ").map(Number);
                sumOfRoundNumbers(a);
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
