let n = 2;
let ans = new Array(n);
for (let i = 0; i < n; i++) {
  ans[i] = new Array(n).fill(0);
}

let row = 0;
let col = 0;
let currentValue = 1;
let currentDirection = 0;
let directions = ["right", "up", "left", "down"];
while (currentValue <= n * n) {
  ans[row][col] = currentValue++;
  if (currentDirection === 0) {
    if (col === n - 1 || ans[row][col + 1] != 0) {
      currentDirection++;
      row++;
    } else {
      col++;
    }
  } else if (currentDirection === 1) {
    if (row === n - 1 || ans[row + 1][col] !== 0) {
      currentDirection++;
      col--;
    } else {
      row++;
    }
  } else if (currentDirection === 2) {
    if (col === 0 || ans[row][col - 1] !== 0) {
      currentDirection++;
      row++;
    } else {
      col--;
    }
  } else {
    if (row === 0 || ans[row - 1][col] !== 0) {
      currentDirection = 0;
      col++;
    } else {
      row--;
    }
  }
}

console.log(ans);
