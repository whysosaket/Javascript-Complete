// Concise here in this case refers to having name as property
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Saket", 21, "Male"));

// Writing concise functions inside an object
var myObject = {
  objectName: "cycle",
  setGear(newGear) {
    // Here, we declare a function without using the function keyword
    this.gear = newGear; // Also, we donot need to declare the gear variable, as it is already being assigned a value here
  },
};

myObject.setGear(5);
console.log(myObject.gear);
