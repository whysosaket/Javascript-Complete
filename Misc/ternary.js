// The Ternary oprator can if use in place of a single if else
// SYNTAX
//          CONDITION ? (statement if true) : (statement if false);

function sameNumber(a,b){
    return a===b?"The Numbers Are Equal":"The Numbers are not Equal";
}
console.log(sameNumber(4,5));

// using NESTED TERNARY OPERATORS
function checkLike(a,b){
    return a ? (b ? "Glad You Liked the Video and Subscribed" : "It would have been nice, If You had subscribed"):"How can we improve?";
}
console.log(checkLike(true, false))

function checkSign(a){
    return a>0 ? "Positive" : (a < 0 ? "Negative" : "Zero");
}
console.log(checkSign(-12));