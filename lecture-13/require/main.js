const lib = require('./lib.js')

console.log("Anatomy of lib: ", lib);

lib.sayHewwo("CodeMonkey");

setTimeout(() => {
    console.log("Anatomy of lib: ", lib);
}, 2000)