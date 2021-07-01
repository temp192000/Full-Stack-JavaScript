let obj1 = {
    a: 10,
    b: 20,
    c: 'An Object',
}

let obj2 = Object.create(obj1)



/**
 * 
 * What the hell are these?
 * 
 * obj1.__proto__ == obj2
 * obj2.__proto__ == obj1 
 * 
 * I guess, 'this' pointer points to the same set of properties in both of these objects because,
 * obj1.this == obj2.this had evaluated to be 'true' 
 */