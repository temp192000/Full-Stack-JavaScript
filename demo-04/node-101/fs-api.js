const fs = require('fs')

// Neither an Asynchronous Function nor Production Safe
// Asychronous Function: fs.writeFile() runs on background thread. So, it's preferrable for Production

fs.writeFileSync('hewwo-files.txt', "Hewwo, FileSystem!");

let data = fs.readFileSync('./hewwo-files.txt')

console.log(data); // Buffer. Not Human-Readable.
console.log(data.toString());
