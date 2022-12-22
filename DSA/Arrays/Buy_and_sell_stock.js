//https://leetcode.com/problems/best-time-to-buy-and-sell-stock

let prices = [7, 6, 4, 3, 1];
let n = prices.length;
let profit,
  maxProfit = 0;
let buy = prices[0];
for (let i = 0; i <= n; i++) {
  profit = prices[i] - buy;
  if (prices[i] < buy) {
    buy = prices[i];
  } else if (profit > maxProfit) {
    maxProfit = profit;
  }
}
console.log(maxProfit);
