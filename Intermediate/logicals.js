// Using && signs to check for two conditions


// Logical AND operators
function check1(a){
    if(a>=5&&a<=10) return "The value is between 5 and 10";
    else return "The value is not between 5 and 10";
}
console.log(check1(1))
console.log(check1(7))

// Logical OR operators
function check2(a){
    if(a>100||a<0) return "The water is not in liquid state";
    else return "Water is in liquid state"
}

console.log(check2(-12));

// Chaining if else statements

function chain(a){
    if(a>1000) return "Huge";
    else if(a>500&&a<=1000) return "Very Large";
    else if(a<=500&&a>100) return "Large";
    else if(a>50&&a<=100) return "Medium";
    else return "Small";
}

console.log(chain(57));

