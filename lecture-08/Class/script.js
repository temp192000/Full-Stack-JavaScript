class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    isAdult(){
        return this.age >= 18; 
    }
}

let p1 = new Person("CodeMonkey", 20)
let p2 = new Person("ScriptMonkey", 14)

console.log(typeof Person) // function; 'class' is neither a datatype nor a OOP Inheritance Model. Just Sytactic Sugar
console.log(p1.__proto__ == Person.prototype)
console.log(p1.__proto__.__proto__ == Object.prototype)

class Student extends Person{
    constructor(name, age, rollNumber){
        super(name, age);
        this.rollNumber = rollNumber;
    }
}

let s1 = new Student("Akshit", 19, 11805000);
let s2 = new Student("Yash", 17, 11805001);

/**
 * isAdult() is being accessible by all objects even inside their derived classes, How's this happening?
 * 
 * Prototype - Prototype Inheritance Chain.
 * 
 * Object.prototype -> Person.prototype -> Student.prototype -->>
 *          
 *          Thus their Objects inside Derived Classes were able to access all the functions, fields ...
 * 
 * There is NO INHERITANCE via their 'class' because, 'class' is itself is a Function().
 * Object() --X--> Person() --X--> Student() --X-->>>
 * 
 */