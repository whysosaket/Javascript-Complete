// PARSE INT FUNCTION -> Takes a string value and returns its INTEGER VALUE

var str = "5";
var convertedInt = parseInt(str);

console.log(typeof str);
console.log(typeof convertedInt);

// Using parseInt with a RADIX (The RADIX specifies the base of the number in the string);

str = "1101";
convertedInt = parseInt(str,2);
console.log(convertedInt); // should return 13, the integer value of BINARY 1101