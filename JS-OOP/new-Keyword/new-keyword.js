function Person(name, age){
    this.name = name;
    this.age = age;
    return 18;
}

// Function call without new keyword
let p1 = Person("Ranjith", 20);

console.log("Function Return: ", p1);
console.log("Name:  ", name);
console.log("Age:   ", age);


// Function call with new keyword
let p2 = new Person("Ranjith", 20);

console.log("Function Return: ", p2);
console.log(JSON.stringify(p2));
console.log(p2.name);
console.log(p2.age);
