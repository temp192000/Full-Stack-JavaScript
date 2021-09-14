function Person(name, age){
    this.name = name;
    this.age = age;
    this.isAdult = function(){
        return this.age >= 18;
    };
};

let p1 = new Person("Ranjith Sr.", 20);
let p2 = new Person("Ranjith Jr.", 14);

console.log("p1.isAdult():  ", p1.isAdult());
console.log("p2.isAdult():  ", p2.isAdult());

// Though the function's logic is same in both the objects. Both have those functions inside them and they both aren't the same object
// And, this costs us memory and inefficient.

console.log("p1.isAdult == p2.isAdult:  ", p1.isAdult == p2.isAdult);