let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let ans = [];
let m = matrix.length;
let n = matrix[0].length;
let rowStart = 0;
let colStart = 0;
let rowEnd = m - 1;
let colEnd = n - 1;

while (rowStart <= rowEnd && colStart <= colEnd) {
  for (let i = colStart; i <= colEnd; i++) {
    ans.push(matrix[rowStart][i]);
  }
  rowStart++;
  for (let i = rowStart; i <= rowEnd; i++) {
    ans.push(matrix[i][colEnd]);
  }
  colEnd--;
  if (rowStart <= rowEnd) {
    for (let i = colEnd; i >= colStart; i--) {
      ans.push(matrix[rowEnd][i]);
    }
  }
  rowEnd--;

  if (colStart <= colEnd) {
    for (let i = rowEnd; i >= rowStart; i--) {
      ans.push(matrix[i][colStart]);
    }
    colStart++;
  }
}

return ans;
