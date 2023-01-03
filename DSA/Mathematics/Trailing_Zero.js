// function fact(n) {
//   if (n === 0) return 1;
//   return n * fact(n - 1);
// }

// let n = 10;
// let count = fact(n);
// let res = 0;
// while (count % 10 === 0) {
//   res++;
//   count = count / 10;
// }
// console.log(res);

// let n = 10;
// let res = 1;
// let count = 0;
// for (let i = 2; i <= n; i++) {
//   res *= i;
// }

// while (res % 10 === 0) {
//   count++;
//   res = res / 10;
// }

// console.log(count);

let n = 10,
  res = 0;
for (let i = 5; i < n; i = i * 5) {
  res = res + n / i;
}
console.log(res);
