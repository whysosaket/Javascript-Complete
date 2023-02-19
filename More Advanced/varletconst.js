// The difference between VAR and LET keywords

/*

1. Let donnot let us declare a variable twice but var can
2. Var is declared in the global/local scope (FUNCTIONAL SCOPE) but LET is only limited to BLOCK SCOPE
3. const has all the features of let but it is read-only
*/

var name = "Saket";
let age = 21;

function testVarLet(){
    "use strict";   // FORCES JS to RUN into STRICT MODE, to catch common coding mistakes
    var name = "KILO";
    console.log(name);

    let age = 11;   // Acceptable because this is inside the function uses that local and global variable concept
    console.log(age);

    var name = "BILLU";
    console.log(name);

    // let age = 12;    // This throws error because, let donnot allow multiple declaration
    console.log(age);
}

testVarLet();

// Scope of var and let

// USING THE const KEYWORD to declare a Read-Only Variable

// The convention is that we use (ALL CAPS) to declare a const.

const TESTCONST = "This is a Constant Variable in JS"
console.log(TESTCONST);
// TESTCONST = "sadas"; // This will throw an error because we cannot assign a value to a 'const'
// console.log(testConst); // This line throws an error

// ****** An Array with a 'const' delaration can still be mutated *******
const TESTARRAY = [1,2,3,4];
// TESTARRAY = [4,5,6,67,12];  // This will throw an error
TESTARRAY[2] = 69;
console.log(TESTARRAY)

/***** So we conclude that Arrays can be MUTATED even it is declared with const *****/

//*** Prevent OBJECT MUTATION (object.freeze()) */

function freezeTest(){
    'use strict';

    const CONST = {
        PI: 3.14
    };
    
    Object.freeze(CONST);   // FIX -> to avoid object mutation

    try{
        CONST.PI = 100;
    }catch(e){
        console.log(e);
    }
    return CONST.PI;
}

const pi = freezeTest();
console.log(pi);

// Here we see that we can change the Value of an Object Property ecen though the object is declared using 'const'
// to fix this we use Object.freeze(Object);