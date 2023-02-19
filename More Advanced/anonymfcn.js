// Anonymous Functions are basically => function that don't have a name
// Generally we use in the case when a function has to take a funciton as an input argument

var magic = function () {
  return "Hello";
};
console.log(magic);

magic = () => {
  return "Hellow2";
};
console.log(magic);

magic = () => "Hello3";
console.log(magic);

//******************* */
// Writing arrow functions with arguments
var concat = (arr1, arr2) => arr1.concat(arr2);
console.log([1, 2, 3], [4, 5, 6]);

/************ARROW FUNCTIONS WORK REALLY WELL WITH HIGHER ORDER FUNCTIONS */
/**** Some higher order functions are -> map, filter, reduce */

// Using filter and map functions to filter out negative numbers in an array and return the squared value of it
const arr = [1.2, 22, -23.3, 19.11, -22, -56.33, 12, 483, -12, 45];

const filterredList = (arr) => {
  const filter = arr.filter((num) => num > 0).map((num) => num * num);
  return filter;
};

console.log(filterredList(arr));