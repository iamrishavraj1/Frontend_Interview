let num = 78987;
let check = 0;
let temp = num;
while (temp != 0) {
  let last_digit = Math.trunc(temp % 10);
  check = check * 10 + last_digit;
  temp = Math.trunc(temp / 10);
}

console.log(check === num);
