// Strings
var myFirstName = "Saket";
var myLastName = "Aryan";

// Double Quoting - ESCAPE CHARACTERS
var doubleQuote = "I am a \"Double Quoted\" string inside \"Double Quoted\" string."
console.log(doubleQuote);

// We can also use signle quote inside a double quote and vice versa
doubleQuote = 'I am a "Double Quoted" string inside a \'Signle Quoted\' string.'

// Another method we can use is using back ticks or `
doubleQuote = `I am a "Double Quoted" and 'Single Quoted' string inside backticks.`

// Escape Sequences in JavaScript

/*****
 
CODE OUTPUT
\'  single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed

*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)

// String concatination with Plus Operator
myStr = "This is the first string."+" This is the second string.";
// We can even use += operator
myStr += " This is the third string";
console.log(myStr);
// Similary we can even use variables to concatinate strings

// String methods
let stringLength = myStr.length;
console.log(stringLength);

// We can use the bracket notation in order to get the character at that index in the string
var testString = "Saket";
var firstLetter = testString[0];
console.log(firstLetter);

/* JavaScript also uses Zero Based Indexing */

// Like Java and C/C++ Strings are immutable
/*
EXAMPLE

testString[0] = "K";

// The above line of code won't work as string in javascript are also immutable
*/

// Using bracket Notation to get the last character of the string
testString = "Saket";
var lastLetter = testString[testString.length - 1];
console.log(lastLetter);

// Using bracket notation in order to get Nth last letter
testString = "Saket";
lastLetter = testString[testString.length - 5];
console.log(lastLetter);