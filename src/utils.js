console.log("utils.js is running");

const square = (s) => {
  return s * s;
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

export { square, add, subtract as default };
