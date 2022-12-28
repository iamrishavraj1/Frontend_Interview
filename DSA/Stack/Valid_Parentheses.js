const s = "(]";
const ans = [];
for (let i = 0; i < s.length; i++) {
  if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
    ans.push(s[i]);
  } else {
    if (s[i] === ")") {
      if (ans.pop() !== "(") {
        return false;
      }
    } else if (s[i] === "}") {
      if (ans.pop() !== "{") {
        return false;
      }
    } else if (s[i] === "]") {
      if (ans.pop() != "[") {
        return false;
      }
    }
  }
}
console.log(true && !ans.length);
