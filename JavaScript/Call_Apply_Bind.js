let obj1 = {
  name: "Rishav",
};
let obj2 = {
  name: "Raj",
};

function printName(college, place) {
  console.log(this.name+ " from" + college + " ," + place);
}
printName(+"BIT", "MESRA");
