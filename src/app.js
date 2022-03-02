// import "./utils.js";
// import subtract, { square, add } from "./utils.js";
// import isSenior, { isAdult, canDrink } from "./person.js";

// console.log("app is running..");
// console.log(square(4));
// console.log(add(2, 4));
// console.log(subtract(3, 1));

// console.log(isAdult(15));
// console.log(isAdult(25));
// console.log(canDrink(15));
// console.log(canDrink(25));
// console.log(isSenior(64));
// console.log(isSenior(66));

// import validator from "validator";

// console.log(validator.isEmail("test@gmail.com"));
// console.log(validator.isEmail("test"));

import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.css";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
