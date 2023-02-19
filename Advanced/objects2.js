// Instead of using switch statements we can we OBJECTS
// These Objects work as "DICTIONARY" to store "KEY-VALUE Pairs"

function testLookup(a){
    var lookup = {
        0: "Stone",
        1: "Paper",
        2: "Scissors"
    }
    return lookup[a];
}

console.log(testLookup(1));

// Checking if a PROPERTY exists in an OBJECT

var Obj1 = {
    "name": "Saket",
    "age": 21,
    "School": "ITUS"
}

console.log(Obj1.hasOwnProperty('age')) // Checking if a PROPERTY exists in an OBJECT
console.log(Obj1.hasOwnProperty('college'))

// Objects Inside of Array

var ArrayObjects = [
    {
        "name": "Saket",
        "age": 21,
        "school": "ITUS"
    },
    {
        "name": "Akshat",
        "age": 25,
        "school": "DPS"
    },
    {
        "name": "Harshit",
        "age": 34,
        "school": "Nahi Gaya Hai"
    }
]

console.log(ArrayObjects[2]['school'])
console.log(ArrayObjects[2].school)

ArrayObjects[1]['school'] = "Kabhi Nahi Jayega";
console.log(ArrayObjects[1].school)

// This similar method can be used to access a array inside of a object or a object inside of an array