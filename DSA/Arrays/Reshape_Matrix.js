//https://leetcode.com/problems/reshape-the-matrix

let mat = [
  [1, 2],
  [3, 4],
];
let mat_row = 2;
let mat_column = 4;

if (mat.length * mat[0].length != mat_row * mat_column) {
  console.log(mat);
}
let ans = [[]];
let ans_row = 0;
let ans_column = 0;
for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
    if (ans_column >= mat_column) {
      ans_column = 0;
      ans_row++;
      ans.push([]);
    }

    ans[ans_row][ans_column++] = mat[i][j];
  }
}

console.log(ans);
