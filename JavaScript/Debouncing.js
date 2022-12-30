let count = 1;
const getData = () => {
  console.log(`DATA IS FETCHING ${count++}`);
};

const debouncingFn = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const ans = debouncingFn(getData, 300);
