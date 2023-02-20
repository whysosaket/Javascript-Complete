  //***********USING DESTRUCTURING IN ORDER TO SPREAD AN OBJECT */
  var myObject = {
    name: "Saket",
    col: 21,
    college: "ITER"
  };

  const { name, col, college } = myObject;
  console.log(name);
  console.log(col);
  console.log(college);

  // Another method to do so is 
  var {name:n, col: c, college: cl } = myObject;  // n = Saket, c = 21, cl = ITER
  console.log(n);
  console.log(c);
  console.log(cl);

//**************USING DE-STRUCTURING WITH NESTED OBJECTS */
myObject = {
    name: "Saket",
    marks: {math: 21, science: 12, hindi: 9},
    academic: {grade: 'A', attendance: 76.2}
}

const {marks: {science: thisMarks}} = myObject;
console.log("Marks in Science is: "+thisMarks);

//*************USING DE-STRUCTURING TO ASSIGN VARIABLES FROM ARRAYS */

const [a,b,,d] = [1,23,412,34]; // We can use empty ,, in order to skip an element
console.log(a,b,d);

//****USING ARRAY DE-STRUCTURING TO SWITH PLACES OF TWO NUMBERS */
let num1 = 11, num2 = 99;
console.log(num1, num2);
const switchNumbers = (()=>{
    [num1, num2] = [num2, num1];
})();
console.log(num1, num2);

//******USING DE-STRUCTURING WITH REST OPERATOR */

month = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY'];

function removeFirstTwoElements(arr){
    const [, , ...returnArray] = arr;
    return returnArray;
}

console.log(removeFirstTwoElements(month));

//*******DE-STRUCTURING ASSIGNMENT TO PASS A OBJECT AS A FUNCTION PARAMETER */

myObject = {
    name: "Saket",
    col: 21,
    college: "ITER"
  };

function returnNameAndAge({name, col}){
    return "Name: "+name+" Age: "+col;
}
console.log(returnNameAndAge(myObject))