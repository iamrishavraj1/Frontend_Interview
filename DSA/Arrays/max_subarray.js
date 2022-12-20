//https://leetcode.com/problems/maximum-subarray

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = nums.length;
let sum = 0;
let maxSum = Number.NEGATIVE_INFINITY;
for (let i = 0; i <= n; i++) {
  sum += nums[i];
  if (sum > maxSum) {
    maxSum = sum;
  }
  if (sum < 0) {
    sum = 0;
  }
}

console.log(maxSum);
