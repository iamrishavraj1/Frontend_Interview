let nums = [2, 7, 11, 15];
let target = 9;
let n = nums.length;
let ans = new Map();
for (let i = 0; i <= n; i++) {
  let remainingSum = target - nums[i];
  if (ans.has(remainingSum)) {
    console.log([ans.get(remainingSum), i]);
  }
  ans.set(nums[i], i);
}
