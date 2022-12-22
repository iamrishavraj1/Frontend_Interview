function outter(outer) {
  return function inner(innerF) {
    console.log(outer);
    console.log(innerF);
  };
}
const newFun = outter("Outer");
newFun("Inner");
