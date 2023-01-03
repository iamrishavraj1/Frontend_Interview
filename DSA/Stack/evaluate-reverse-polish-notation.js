//https://leetcode.com/problems/evaluate-reverse-polish-notation/
let tokens = ["2", "1", "+", "3", "*"];
let stack = [];
for (let i = 0; i < tokens.length; i++) {
  if (tokens[i] === "+") {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b + a);
  } else if (tokens[i] === "-") {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b - a);
  } else if (tokens[i] === "*") {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b * a);
  } else if (tokens[i] === "/") {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(Math.trunc(b / a));
  } else {
    stack.push(Number(tokens[i]));
  }
}
console.log(stack.pop());
