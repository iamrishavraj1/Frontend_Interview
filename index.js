let arr = ["RED", "YELLOW", "BLACK", "RED", "YELLOW"];
let map = {};
for (let i = 0; i < arr.length; i++) {
  if (!map[arr[i]]) {
    map[arr[i]] = 1;
  } else {
    map[arr[i]]++;
  }
}

for (const name in map) {
  console.log(`${name}= ${map[name]}`);
}
