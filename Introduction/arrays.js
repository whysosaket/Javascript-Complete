// Unlike java, In javascript arraya can store different data in themselves
// This means that one array can store some numbers as well as string in the same array
// IN javascript elements can be of any data type
 var myArray = ["Saket", 21];

 // Nested Arrays
 var nestedArray = [["Saket", 21],["Ankit", 16]];

 // To access data in a array we use indices
 console.log(nestedArray[1])

 // We can even use array index to modify an array;
 nestedArray[0] = ["Harshit",23];
 console.log(nestedArray[0])

 // Using [][] to access/modify a multidimentional array
 nestedArray[0][1] = 99;
 console.log(nestedArray[0])

 // Using push function into the array to append data at the end
 nestedArray.push(["Saket", 21])

 // We can use the pop() function to remove the last element and return that variable
 var testLiteral = nestedArray.pop()
 console.log(testLiteral)

 // The shift() function removes the first element of the array insted of the last element
 testLiteral = nestedArray.shift()
 console.log(testLiteral)

 // The unshift() function is similar to the push() function but this adds to the start of the array
 nestedArray.unshift(["Hello", 222]);
 console.log(nestedArray[0])

 // Example of a nested array