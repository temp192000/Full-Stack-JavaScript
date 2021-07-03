function Person(name, age){
    // Person() --> Function() --> Object()
    this.name = name;
    this.age = age;
}

let p = new Person("CodeMonkey", 20);

function Student(rollNumber){
    // Derived Class: Object() --> Function() --> Person() --> Student()
    this.rollNumber = rollNumber;
}

let s = new Student();


//Student.prototype = Object.Create(Person.prototype)
// May be Read MDN or any Books to hack around this