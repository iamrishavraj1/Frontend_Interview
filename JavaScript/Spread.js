/*
? Description


? Uses
Used to spread the state in react app to avoid mutation.

*/

// let numberStore = [0, 1, 2];
// let newNumber = 12;
// let newNumberStore = [...numberStore, newNumber];

// console.log(newNumberStore); // [ 0, 1, 2, 12 ]

let numberStore = [ 0, 1, 2 ]
let newNumber = 12;
let newNumberStore = [ ...numberStore ]
console.log(newNumberStore);
let newNumberStore1 = [newNumber,...numberStore]
console.log( newNumberStore1 );
console.log(numberStore);