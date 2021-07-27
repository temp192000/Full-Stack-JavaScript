const lib1 = require('./lib-1.js')
const lib2 = require('./lib-2.js')

console.log("Lib 1 ->", lib1);
console.log("Lib 2 ->", lib2);

console.log("Lib 1 . Lib 2 ->", lib1.lib2);
console.log("Lib 2 . Lib 1 ->", lib2.lib1);


console.log("Lib 1 . Lib 2 . Lib 1 ->", lib1.lib2.lib1);
console.log("Lib 2 . Lib 1 . Lib 2 ->", lib2.lib1.lib2);
