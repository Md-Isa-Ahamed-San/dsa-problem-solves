const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const antonAndPolyhedrons = (shapes) => {
  let sum = 0n; // Initialize sum as a BigInt
  for (const shape of shapes) {
    if (shape === "Icosahedron") sum += 20n;
    else if (shape === "Dodecahedron") sum += 12n;
    else if (shape === "Cube") sum += 6n;
    else if (shape === "Tetrahedron") sum += 4n;
    else if (shape === "Octahedron") sum += 8n;
  }
  console.log(sum.toString()); // Convert sum to string before printing
};

const handleTestCases = () => {
  rl.question("", (testCase) => {
    testCase = parseInt(testCase);
    let shapesArray = []; // Array to store shapes
    let count = 0;
    
    const getShapeInput = () => {
      rl.question(``, (input) => {
        shapesArray.push(input);
        count++;
        if (count < testCase) {
          getShapeInput(); // Recursive call to get input for next shape
        } else {
          antonAndPolyhedrons(shapesArray); // Call the function with the array of shapes
          rl.close();
        }
      });
    };

    getShapeInput(); // Start getting shape inputs
  });
};

handleTestCases();
