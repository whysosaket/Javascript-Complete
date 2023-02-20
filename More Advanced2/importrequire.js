/// UNDERSTANDING THE DIFFERENCE BETWEEN IMPORT EXPORT AND REQUIRE

/*

One of the major differences between require() and import() is that require() can
be called from anywhere inside the program whereas import() cannot be called conditionally,
it always runs at the beginning of the file. To use the require() statement, a module must be saved with

*/

import { capitalizeString, reg } from "./export.js";

// we can use the * mark to import all the things that an exporting file sends
import * as object from "./export2.js";

// impporting a default import
import myName from "./export3.js";


const cap = capitalizeString("saket");
console.log(cap);
console.log(reg);

const cap2 = object.toUpperCase("aryan");
console.log(cap2);
console.log(object.myName);
console.log(object.luckyNumber);
console.log(object.sum(5,6));

console.log(myName());      // default import