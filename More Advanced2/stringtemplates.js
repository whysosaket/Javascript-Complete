// Template Literrals are a special type of string that make making complex string easier

var person = {
    name: "Saket",
    age: 21
}

var greetings = `Hello, my name is ${person.name}.
And, I am "${person.age}" years old.
`
console.log(greetings);

