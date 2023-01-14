/*
var keyword is global scope and let & const is a limited to block scope.
it means whenever we  we use var keyword then it will go the gloabl scope
and we can declare from anywhere from scope but in the case of let & const
we can only access from only scope where they are initialize.
*/

var a = 20;
console.log(a);
{
  var a = 30;
  console.log(a);
}
console.log(a);

let b = 30;
console.log(b);
{
  let b = 100;
  console.log(b);
}

console.log(b);
const c = 30;
console.log(c);
{
  const c = 100;
  console.log(c);
}

console.log(c);
