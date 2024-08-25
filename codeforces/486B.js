const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunction = matrix => {
  let oldMatrix = matrix;
  let rowArr = [];
  let colArr = [];
  let gotIn = false;
  let countOneInMainMatrix = 0;
  if (matrix.length === 1 && matrix[0].length === 1) {
    console.log("YES");
    console.log(matrix[0][0]);
    return;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        colArr[j] = 0;
        rowArr[i] = 0;
      } else {
        countOneInMainMatrix += 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowArr[i] === 0 || colArr[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        gotIn = true;
        sum = 0;
        for (let k = 0; k < matrix[0].length; k++) {
          sum += matrix[i][k];
        }
        for (let l = 0; l < matrix.length; l++) {
          sum += matrix[l][j];
        }
        // console.log(sum);
        if (sum <= 1) {
          console.log("NO");
          return;
        }
      }
    }
  }
 
  if (countOneInMainMatrix > 0 && gotIn === false) {
    console.log("NO");
    return;
  }

  console.log("YES");
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
    }
    console.log(row.trim());
  }
};

const handleTestCases = () => {
  const handleInput = () => {
    rl.question("", dimensions => {
      const [rows, cols] = dimensions.split(" ").map(Number);
      let matrix = [];

      const handleMatrixInput = rowIndex => {
        if (rowIndex < rows) {
          rl.question("", row => {
            matrix.push(row.split(" ").map(Number));
            handleMatrixInput(rowIndex + 1);
          });
        } else {
          theFunction(matrix);
        }
      };
      handleMatrixInput(0);
    });
  };
  handleInput();
};

handleTestCases();
