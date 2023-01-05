let numsRows = 5;
let ans = [];
// console.log(ans);
for (let i = 0; i < numsRows; i++) {
  ans[i] = [];

//   console.log(`FIRST ${ans}`);

//   console.log(`SECOND: ${ans[i][0]}`);
  ans[i][0] = ans[i][i] = 1;

  for (let j = 1; j < i; j++) {
    ans[i][j] = ans[i - 1][j] + ans[i - 1][j - 1];
    // console.log(ans);
  }
}
console.log(ans[3]);
