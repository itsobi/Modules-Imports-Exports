// import { num1, num2 } from "./js/variable";

// Using Alias to access values of import
import * as v from "./js/variable.js";
import { add } from "./js/functions.js";

// console.log(v.num1);
// console.log(v.num2);

// add(v.num1, v.num2);

console.log(add(v.num1, v.num2));