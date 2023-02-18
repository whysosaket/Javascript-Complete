// Object in Javascript are similar to ARRAYS
// But instead of using index based system it uses properties

var myDog = {
    "name": "Safed",
    "legs": 3,
    "tails": 0.5,
    "color": "black",
    "friends": ['Kaalu', 'Sahil', 'Babu'],
    "eats everyday": "Banana"
};
console.log(myDog);

// Ways to access object properties
console.log(myDog['eats everyday']);
console.log(myDog.name);

/*
Though, we can use both dot notation and brackts in order to access a
property of an object in java, the best used case is when the property name has a
SPACE in it's name
*/

// We can also use numbers as the property name
//Example

var playerNames = {
    7: "Ronaldo",
    10: "Messi",
    23: "Beckham",
    69: "Rituraj"
}

var playerNumber = 69;
var playerName = playerNames.playerNumber; // This produces a 'UNDEFINED' result as we cannot use this kind of notation
// playerName = playerNames.16; // This is also INVALID SYNTAX
playerName = playerNames[playerNumber];
console.log(playerName)

// For UPDATING OBJECT PROPERTIES

myDog = {
    "name": "Safed",
    "legs": 3,
    "tails": 0.5,
    "color": "black",
    "friends": ['Kaalu', 'Sahil', 'Babu'],
    "eats everyday": "Banana"
};

myDog.name = 'Killu';
console.log(myDog.name);

myDog['name'] = 'Bullu';
console.log(myDog.name);

// TO ADD ""NEW"" properties to our object we can use the dot notation && array wise notation
myDog.bark = true;
console.log(myDog);

myDog['run'] = "Do not run!";
console.log(myDog);


// DELETING A PROPERTY from an object
delete myDog.run;   // This deletes the property named run
console.log(myDog);

delete myDog['bark'];
console.log(myDog);