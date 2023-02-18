// Using if else
function returnTrueFalse(a){
    if(a) return "The Statement is true";
    else return "The statement is false";
}
console.log(returnTrueFalse(false));

// The equality check
function isEqual(a,b){
    if(a==b) return "The values are equal";
    else return "The values are not equal";
}
console.log(isEqual(5,5.0));

// Strict Equality Check
function isStrictEqual(a,b){
    // console.log("Values: "+a+", "+b);
    if(a===b) return "The values are STRICTLY equal";
    else if(a==b) return "The values are not STRICTLY equal";
    else return "The values are not equal"
}

// console.log(isStrictEqual(5,5))
console.log(isStrictEqual(5,"5"))

// Comparasion with InEquality operator

// The equality check
function isInEqual(a,b){
    if(a!=b) return "The values are equal";
    else return "The values are not equal";
}
console.log(isInEqual(5,56));

// Strict Equality Check
function isInStrictEqual(a,b){
    // console.log("Values: "+a+", "+b);
    if(a!==b) return "The values are STRICTLY unequal";
    else if(a==b) return "The values are not STRICTLY unequal";
    else return "The values are not equal"
}

// console.log(isStrictEqual(5,5))
console.log(isInStrictEqual(5,"5"))

// Greater Than and Smaller Than Operators
function operatorTest(a,b){
    if(a>b) return "A is larger than B"
    else if(a<b) return "A is smaller than B"
    else return "A is equal to B"
}

console.log(operatorTest(5,123))

// SWITCH Statements

function switchFunction(a){
    var answer;
    switch(a){
        case 0:
            answer = "Stone";
            break;
        case 1:
            answer = "Paper";
            break;
        case 2:
            answer = "Scissors";
            break;
        default:
            answer = "Invalid Input";
    }

    return answer;
}

console.log(switchFunction(1))

function switchFunction2(a){
    var answer;
    switch(a){
        case 0:
        case 1:
        case 2:
            answer = "Paper";
            break;
        case 3:
            answer = "Scissors";
            break;
        default:
            answer = "Invalid Input";
    }

    return answer;
}