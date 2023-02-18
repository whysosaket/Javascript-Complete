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