//brute forces tc: O(nm*(n+m)) + O(nm) which is almost O(n^3)
// const makeRowMarked = (matrix, row) => {
//   for (let j = 0; j < matrix.length; j++) {
//     matrix[row][j] = -1;
//   }
// };

// const makeColumnMarked = (matrix, col) => {
//   for (let i = 0; i < matrix.length; i++) {
//     matrix[i][col] = -1;
//   }
// };
// var setZeroes = function (matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       // console.log(matrix[i][j]);
//       if (matrix[i][j] === 0) {
//         makeRowMarked(matrix, i);
//         makeColumnMarked(matrix, j);
//       }
//     }
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if(matrix[i][j] === -1){
//         matrix[i][j] = 0;
//       }
//       console.log(matrix[i][j]);
//     }
//     console.log("");
//   }
//   return matrix;
// };
//better tc:O(mn) sc: O(m+n)

// var setZeroes = function (matrix) {
//   let rowArr = [];
//   let colArr = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//       if (matrix[i][j] === 0) {
//         rowArr[i] = 1;
//         colArr[j] = 1;
//       }
//     }
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (rowArr[i] === 1 || colArr[j] === 1) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   // console.log(matrix);
//   return matrix;
// };

//optimized O(mn)
var setZeroes = function (matrix) {
  let col0 = 1;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        if (j != 0) {
          matrix[0][j] = 0;
        }
        else{
          col0 =0;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
  // console.log(matrix);
  // console.log("col0:", col0)
  if (col0 === 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  console.log(matrix);
  return matrix;
};

// setZeroes([
//   [1, 1, 1, 1],
//   [1, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 1],
// ]);
setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
setZeroes([[0, 1]]);
// setZeroes([
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ]);
