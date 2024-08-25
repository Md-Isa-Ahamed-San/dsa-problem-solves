//tc O(mn) sc O(mn)
// var rotate = function(matrix) {
//     let newArrMatrix = []
//     for(let i =0;i<matrix.length;i++){
//         for(let j =0;j<matrix[0].length;j++){
//             newArrMatrix.push(matrix[i][j])
//         }
//     }
//     console.log(newArrMatrix)
//     //column
//     let k =0
//     for(let j =matrix[0].length-1;j>=0;j--){
//         //row
//         for(let i =0;i<matrix.length;i++){
//            matrix[i][j] = newArrMatrix[k]
//            k++;
//         }
//     }
//     // console.log(matrix)
//     return matrix;
// };

//tc O(mn) sc 0
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if(i<j){
        [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse()
  }
//   console.log(matrix)
  return matrix;
};
rotate([[1,2,3],[4,5,6],[7,8,9]])
// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);
