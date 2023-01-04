class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    if (this.map[key] === undefined) return -1;

    return this.map[key];
  }

  remove(key) {
    this.map[key] = undefined;
  }
}

const map = new HashMap();
map.put(0, 1);
map.put(1, 2);
console.log(map);
console.log(map.get("1"));
console.log(map.remove(0));
console.log(map);
