// Generating a random decimal

console.log(Math.random()) // generates a random number b/w 0 and 1

// RANDOM WHOLE NUMBER LESS THAN A NUMBER
console.log(Math.floor(Math.random()*10))   // Creates a random WHOLE number LESS THAN 10

// RANDOM WHOLE NUMBER IN A RANGE
var max = 10;
var min = 5;
var range = Math.floor(Math.random()*(max-min+1))+min;  // Generates a random number in a range
// The Above value also includes MAX and MIN
console.log(range);