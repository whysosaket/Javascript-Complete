console.log("Hello World")

// This is a comment
/*
This is an multiline comment
*/

// Data Types and Variables
/*
Types of data:
1. undefined -> Something that hasn't been defined
2. null -> means nothing
3. boolean -> True/False
4. string -> A collection of characters
5. symbol -> A primitive value that is unique  and immutable
6. number -> Number
7. object -> Can store a lot of key value pairs
*/

var myName = "Saket"
let ourName = "Aryan"
const pi = 3.14

/*
Difference between var and let:
-> The difference between var and const is that var can be used throughout the program,
but let can only we used inside it's scope of declaration
*/

// Declaration and assignment of variables
var a;
a = 7;
// here var b is declaring the variable and 2 in initialization
var b = 2;
b = a; // assigning value of a into b

// Variables and function names are case sensitive
// we usually use camelCase for declaring tha variables

// Adding Two Numbers
var sum = 10+12;
// -> All other assignment operators are same

// Inscrement a number
sum++;
sum+=1;
sum = sum + 1;

// To find remainder we use modulo operator
sum = 10%7; // gives 3
