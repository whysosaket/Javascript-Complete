
/// ES6 allows use to create objects using the class syntax and constructor

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}

var shuttle1 = new SpaceShuttle('Mars');
console.log(shuttle1.targetPlanet);

// Another method to do so is using the class keyword
class SpaceShuttle2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var shuttle2 = new SpaceShuttle2('Venus');
console.log(shuttle2.targetPlanet);

/******************************************************************** */

//**********USING GETTERS AND SETTER TO CONTROL ACCESS AN OBJECT */
class Book{
    constructor(name, author){
        this.name = name;
        this._author = author;      // This ' _ ' generally signifies that it is a PRIVATE VARIABLE, and outside objects can't access it
    }

    get writer(){
        return this._author;
    }

    set writer(writer){         // If this setter method is removed the code will still run upon calling, but will not do anything
        this._author = writer;
    }
}

var book = new Book("The Jungle Book" ,"Chetan Bhagat");
console.log(book);

console.log(book.writer);
book.writer = "J K Rowling";     // Setting up the new author
console.log(book.writer)