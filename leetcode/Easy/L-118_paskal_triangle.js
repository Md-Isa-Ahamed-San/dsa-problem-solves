var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  let pascal_triangle = [[1], [1, 1]];
  for (let r = 2; r < numRows; r++) {
    let row = [1];
    for (let rowTraverse = 1; rowTraverse < r; rowTraverse++) {
      let value =
        pascal_triangle[r - 1][rowTraverse - 1] +
        pascal_triangle[r - 1][rowTraverse];

      row.push(value);
    }
    row.push(1);
    pascal_triangle.push(row);
  }
  return pascal_triangle;
};
generate(1);
