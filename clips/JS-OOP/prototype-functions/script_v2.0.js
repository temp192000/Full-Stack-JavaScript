function Person(name, age){
    this.name = name;
    this.age = age;
    // this.isAdult = function(){
    //     return this.age >= 18;
    // };
};

Person.prototype.isAdult = function(){return this.age >= 18;};

let p1 = new Person("Ranjith Sr.", 20);
let p2 = new Person("Ranjith Jr.", 14);

console.log("p1.isAdult():  ", p1.isAdult());
console.log("p2.isAdult():  ", p2.isAdult());

// Efficient use of memory and Performance Optimisation
console.log("p1.isAdult == p2.isAdult:  ", p1.isAdult == p2.isAdult);

console.log("Person.isPrototypeOf(p1)): ", Person.isPrototypeOf(p1)); 
console.log("Person.isPrototypeOf(p2)): ", Person.isPrototypeOf(p2)); 

console.log("Person.prototype.isPrototypeOf(p1)):   ", Person.prototype.isPrototypeOf(p1)); 
console.log("Person.prototype.isPrototypeOf(p2)):   ", Person.prototype.isPrototypeOf(p2)); 

console.log("Person.prototype:  ", Person.prototype);

// Also, All the default function we get for Data types:{Array, String, ...} are in their Object.prototype.
// It's the same implementation for Array, String and others as we did for Person Class.