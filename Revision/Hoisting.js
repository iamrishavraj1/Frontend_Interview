/* Hoisting is default behaviour in JS, where all variables and functions declarations
are moved on top of the scope. The Scope can be both local and global.
*/

hoistingVariable = 10;
console.log(hoistingVariable);
var hoistingVariable;

hositingFunction();
function hositingFunction() {
  functioVariable = 20;
  console.log(functioVariable);
  var functioVariable;
}
