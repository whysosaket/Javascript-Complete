// Functions are used to write reusable codes

// Example
function testFunction(){
    console.log("This is a test function")
}

// Here I am calling the function 3 times
testFunction();
testFunction();
testFunction();

// Passing values into a function as Arguments
function printSum(a,b){
    console.log(a-b);
}
printSum(10,2);
printSum(6,52);

// Scope in a function
var globalVarible = 999999;

/* 
Here, we'll get to see that the testGlobal variable acts as a global variable,
if no var,let is written before it.
But if it is defined by let/var it will not be considered as a global variable anymore,

** Altough acceptable, This is not Recommended **

*/

function scopeFunction1(){
    testGobal = 5;
    var varTest = 3;
    let letTest = 3;
}

function scopeFunction2(){
    console.log(globalVarible);
    console.log(testGobal);
    // console.log(varTest);
    // console.log(letTest);
}

scopeFunction1()
scopeFunction2()

// We can also use local and global variable in the same function,
// In this case, the local variable takes significance

function scopeTest(){
    // using locally
    let globalVarible = 21;
    console.log(globalVarible);
}

function scopeTest2(){
    // using global
    console.log(globalVarible);
}

scopeTest2()
scopeTest()

// Using return value for a function
function returnSum(a,b){
    return a+b;
}
console.log(returnSum(5,6));

// In Javascript, functions can return a value but they DON'T have to;
let returnValue = printSum(2,3);
console.log(returnValue);   // In this case the function returns a undefined value