const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMinCapacity = points => {
  let minCapacity = 0;
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    minCapacity -= parseInt(points[i][0]);
    minCapacity += parseInt(points[i][1]);
    if(minCapacity>max){
        max = minCapacity
    }

}
console.log(max);
};

let n;
let points = [];

rl.question("", numPoints => {
  n = parseInt(numPoints);
  inputPoints(n);
});
function inputPoints(numPoints) {
  if (numPoints <= 0) {
    // console.log(points);
    getMinCapacity(points);
    rl.close();
    return;
  }

  rl.question("", point => {
    const coordinates = point.split(" ").map(Number);
    points.push(coordinates);
    inputPoints(numPoints - 1);
  });
}

inputPoints();
