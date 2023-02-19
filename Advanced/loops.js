// Loops are used for iteration/run a code multiple times

// add 1 to 10 inside an empty array using loops;

// WHILE LOOP
var myArray = [];
let i = 1;
while (i<=10) {
    myArray.push(i);
    i++;
}
console.log(myArray);

myArray = [];

/// Iniitialization | Condition | final expression (runs at end of each iteration)
for(let i=10;i>0;i--){
    myArray.push(i);
}
console.log(myArray)

// We can put any INCREMENT in the for loop

myArray = [];
for(let i=0;i<=20;i+=2){
    myArray.push(i);
}
console.log(myArray)

// We usually use the FOR LOOP for ITERATING through an ARRAY
myArray = ["Saket", "Ankit", "Ram", "Akshat", "Harshit"];

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}

// In the case of a multidimentional or Nested array we can use the NESTED FOR LOOP in order to iterate

myArray = [["Saket", 21, "ITUS", "ITER"],["Akshat", 25, "DPS", "NASA", "NASHA"],["Harshit", 69,"Nahi Gaya Hai"]]

for(let i=0;i<myArray.length;i++){
    for(let j=0; j<myArray[i].length;j++){
        console.log(myArray[i][j])
    }
    console.log(JSON.stringify(myArray[i]));
}

// The DO while loops
// The do while loop will always run aleast once
var sum = 0;
myArray = [1,2,3,4,5];
i = 0;
do{
    sum+=myArray[i];
    i++;
}while(i<myArray.length);
console.log("The sum is: "+sum);