// Import readline module
const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theFunction = matrix => {
  let row = -1;
  let col = -1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === 1) {
        row = i;
        col = j;
      }
    }
  }
  console.log(Math.abs(2-row) + Math.abs(2-col));
};

// Recursive function to handle input for each row
const getInputForRow = (matrix, rowIndex) => {
  // Base case: if all rows have been inputted, call theFunction
  if (rowIndex === 5) {
    theFunction(matrix);
    rl.close();
    return;
  }

  // Prompt the user for input for the current row
  rl.question(``, input => {
    // Parse the input string into an array of numbers
    const row = input.split(" ").map(Number);

    // Push the row into the matrix
    matrix.push(row);

    // Call the recursive function for the next row
    getInputForRow(matrix, rowIndex + 1);
  });
};

// Function to handle input
const handleInput = () => {
  // Initialize empty matrix
  let matrix = [];

  // Start the recursive function to get input for the first row
  getInputForRow(matrix, 0);
};

// Call the handleInput function
handleInput();
