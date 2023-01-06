let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;
if (matrix.length === 0) {
  return false;
}
let low = 0;
let m = matrix.length;
let n = matrix[0].length;
let flag = false;
let high = n * m - 1;
while (low <= high) {
  let mid = low + (high - low) / 2;
  if (matrix[[mid / m][mid % m]] === target) {
    console.log(matrix[[mid / m][mid % m]]);
    flag = true;
  }

  if (matrix[[mid / m][mid % m]] > target) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}
if (flag === true) {
  console.log("true");
} else {
  console.log("false");
}
