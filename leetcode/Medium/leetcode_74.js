// version 1
var searchMatrix = function (matrix, target) {
  let low1 = 0;
  let high1 = matrix.length - 1;

  // console.log(low1,high1);
  while (low1 <= high1) {
    let mid = Math.floor((low1 + high1) / 2);
    console.log(mid);
    if (matrix[mid][0] === target) {
      console.log(matrix[mid][0]);
      return true;
    } else if (matrix[mid][0] < target) {
      low1 = mid + 1;
    } else {
      high1 = mid - 1;
    }
    console.log(low1, high1);
  }
  let ansRow = -1;

  if (low1 === high1) {
    if (
      matrix[low1][0] <= target &&
      matrix[low1][matrix[0].length - 1] >= target
    ) {
      ansRow = low1;
    } else if (
      low1 - 1 > 0 &&
      matrix[low1 - 1][0] <= target &&
      matrix[low1 - 1][matrix[0].length - 1] >= target
    ) {
      ansRow = low1 - 1;
    }
  } else {
    ansRow = high1;
  }
  console.log("ans row,", ansRow);
  if (ansRow === -1) {
    console.log("false");
    return false;
  }
  let low2 = 0;
  let high2 = matrix[0].length - 1;
  while (low2 <= high2) {
    let mid = Math.floor((low2 + high2) / 2);
    console.log(mid);
    if (matrix[ansRow][mid] === target) {
      console.log("true");
      return true;
    } else if (matrix[ansRow][mid] < target) {
      low2 = mid + 1;
    } else {
      high2 = mid - 1;
    }
    // console.log(low1, high1);
  }
  console.log("false");
  return false;
};

//version 2
var searchMatrix = function (matrix, target) {
  let low1 = 0;
  let high1 = matrix.length - 1;

  while (low1 <= high1) {
    let mid = Math.floor((low1 + high1) / 2);
    if (
      matrix[mid][0] <= target &&
      matrix[mid][matrix[0].length - 1] >= target
    ) {
      
      let low2 = 0;
      let high2 = matrix[0].length - 1;

      while (low2 <= high2) {
        let mid2 = Math.floor((low2 + high2) / 2);
        if (matrix[mid][mid2] === target) {
          return true;
        } else if (matrix[mid][mid2] < target) {
          low2 = mid2 + 1;
        } else {
          high2 = mid2 - 1;
        }
      }
      return false;
    } else if (matrix[mid][0] < target) {
      low1 = mid + 1;
    } else {
      high1 = mid - 1;
    }
  }

  return false;
};

// searchMatrix(
//   [
//     [1, 3, 5, 7],
//     [10, 11, 14, 20],
//     [23, 30, 34, 60],
//     // [62, 63, 64, 65],
//     //   [71,72,73,74],
//     //   [81,82,83,84],
//     //   [91,92,93,94]
//   ],
//   34
// );
// searchMatrix(
//     [[1,3,5,7],[10,11,16,20],[23,30,34,60]],11
// );
searchMatrix([[1]], 1);
