var spiralOrder = function (matrix) {
  let newArr = [];
  let left = 0;
  let right = matrix[0].length-1;
  let top = 0;
  let bottom = matrix.length-1;
  // console.log("r b: ",right,bottom)
  while (top<=bottom && left<=right) {
    // checking right
    for (let i = left; i <= right; i++) {
      // console.log(matrix[left][i]);
      // console.log("left i:",left,i);
      newArr.push(matrix[left][i])
    }
    top++;
    // console.log("🚀 ~ spiralOrder ~ top:", top)

    for (let i = top; i <= bottom; i++) {
      // console.log(i,right)
      // console.log(matrix[i][right]);
      // console.log("i right:",i,right)
      newArr.push(matrix[i][right]);
    }
    right--;
    // console.log("🚀 ~ spiralOrder ~ right:", right)
    // if top already crossed bottom thats mean the row already printed. in these type of case left<=right is still true which cause print of same element twice. 
    if(top<= bottom){

      for(let i = right ; i>=left;i--){
        // console.log(matrix[bottom][i]);
        // console.log("bottom i:",bottom,i)
        newArr.push(matrix[bottom][i])
      }
      bottom--;
    }
    // console.log("🚀 ~ spiralOrder ~ bottom:", bottom)
    // same goes for this condition if left<=right is false thats mean that column is already printed but top<=bottom is still true which cause print of column element multiple time
    if(left<=right){
      for(let i = bottom;i>=top;i--){
        // console.log(matrix[i][left]);
        // console.log("i left:",i,left)
        newArr.push(matrix[i][left])
      }
      left++;

    }
   
  }
  console.log(newArr);
  return newArr
};
spiralOrder([
  [1,   2,  3,  4,  5],
  [6,   7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
// spiralOrder([
  
//     [1, 2, 3],
//     [4, 5, 6],
  
// ]);
// spiralOrder([
 
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
 
// ]);
