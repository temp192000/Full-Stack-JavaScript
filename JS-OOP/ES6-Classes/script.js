class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    constructor(name, age, school){
        // Can't use 'this' keyword before calling super() constructor because object is created only after super() constructor call.
        // this.school = school;
        // super(this.name, this.age);
        super(name, age);
        this.school = school;
    }
}


let p1 = new Person("Ranjith Sr.", 20);
let s1 = new Student("Ranjith Jr.", 14, "Home School");

console.log("typeof p1: ", typeof p1);
console.log("p1:    ", p1);


console.log("typeof s1: ", typeof s1);
console.log("s1:    ", s1);
console.log("========================================================");


console.log("typeof p1: ", typeof Person);
console.log("typeof s1: ", typeof Student);
console.log("========================================================");

console.log("p1.__proto__           :  ", p1.__proto__);
console.log("s1.__proto__.__proto__ :  ", s1.__proto__.__proto__);
console.log("========================================================");

// console.log("p1.__proto__.__proto__ :    ", p1.__proto__.__proto__);
// console.log("s1.__proto__.__proto__ :    ", s1.__proto__.__proto__);
// console.log("========================================================");

console.log("s1.__proto__.__proto__ == p1.__proto__ :   ", s1.__proto__.__proto__ == p1.__proto__);
console.log("========================================================");

console.log("Person.prototype.isPrototypeOf(p1):    ", Person.prototype.isPrototypeOf(p1));
console.log("Person.prototype.isPrototypeOf(s1):    ", Person.prototype.isPrototypeOf(s1));
console.log("========================================================");

console.log("Student.prototype.isPrototypeOf(p1):   ", Student.prototype.isPrototypeOf(p1));
console.log("Student.prototype.isPrototypeOf(s1):   ", Student.prototype.isPrototypeOf(s1));
console.log("========================================================");