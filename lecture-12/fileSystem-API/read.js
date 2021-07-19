const fs = require('fs')

fs.readFile(__dirname + '/log.txt', (err, data) => {
    if(err) throw err

    console.log(data); // Stored in Binary Format
    console.log(data.toString()); // Type Conversion or Parsing Binary Data into Human Readable String
})