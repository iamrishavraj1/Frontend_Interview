let costs = [10, 6, 8, 7, 7, 8];
let coins = 5;

let sum = 0;
let count = 0;
 costs.sort((a, b) => a - b);
for (let i = 0; i < costs.length; i++) {
  sum += costs[i];
  if (sum <= coins) {
    count++;
  } else
  {
      break;
  }
}
console.log(count);
