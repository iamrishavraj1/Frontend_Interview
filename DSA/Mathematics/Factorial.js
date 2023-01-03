// let n = 4;
// let res = 1;
// for (let i = 2; i <= n; i++) {
//   res *= i;
// }

// console.log(res);

function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

let n = 4;
console.log(fact(n));
