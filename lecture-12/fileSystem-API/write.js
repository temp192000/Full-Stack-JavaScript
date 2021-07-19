const fs = require('fs')

var data = "Hello, File System!";

fs.writeFile('log.txt', data, (err) => {
    if(err) throw err

    console.log('Write Operation Successful!');
})

// console.log(__dirname);