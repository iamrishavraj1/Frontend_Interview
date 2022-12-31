function outerFunction() {
  let example = "Hello";

  return function innerFunction() {
    console.log(example);
  };
}
const closure = outerFunction();
closure();
