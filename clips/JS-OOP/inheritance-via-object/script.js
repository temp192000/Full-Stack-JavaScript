let daddy = {
    name: 'Ranjith',
    age: 18,
    isEmployed: false
};

let son = Object.create(daddy);
let gSon = Object.create(son);

console.log("Object:    ", daddy);
console.log("Object:    ", son);
console.log("Object:    ", gSon);

console.log("daddy:   ", daddy.name);
console.log("daddy:   ", daddy.age);
console.log("daddy:   ", daddy.isEmployed);

console.log("Son:   ", son.name);
console.log("Son:   ", son.age);
console.log("Son:   ", son.isEmployed);

son.isEmployed = true;

console.log("gSon:  ", gSon.name);
console.log("gSon:  ", gSon.age);
console.log("gSon:  ", gSon.isEmployed);


