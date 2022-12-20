//https://leetcode.com/problems/contains-duplicate

let nums = [1, 2, 3, 1];
let n = nums.length;
const ans = new Set();
for (let i = 0; i <= n; i++) {
  ans.add(nums[i]);
}
if (ans.size < n) {
  console.log(false);
} else {
  console.log(true);
}
