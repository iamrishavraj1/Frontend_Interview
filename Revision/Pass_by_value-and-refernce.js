/*
Pass by Value - When a variable holds a primative data types such as String,Number 
or Boolean, the variables holds the actual value of that data type.
When passing a primitive variable within the function scope and assign the 
passed value to it. This means the change in function value doesn't change
the original value, because the original value and parameter variable have different
memory location
*/

let x = 2;
function add(sum) {
  sum += 2;
  return sum;
}

console.log(add(x));

/*
Pass by Reference - When a varibale holds a refernce type such as objects and arrays,
the variables holds a reference(or memory address) to the actual object/array. 
When passing the reference type variable to a function, the parameter variable
in the function reference the same memory location as the original variable.
*/

let originalArr = [1, 2, 3];
function add(arr) {
  if (Array.isArray(arr)) {
    arr.push(4);
  }
  return arr;
}

console.log(add(originalArr));
console.log(originalArr);
