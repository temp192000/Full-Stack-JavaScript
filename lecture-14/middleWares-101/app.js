const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

function decodeBase64(req, res, next){
    for(let q in req.query){
        // console.log(req.query[q]);
        let data = req.query[q];
        data = new Buffer(data, 'base64').toString('ascii');
        req.query[q] = data;
    }
    next();
    console.log('Decrypted BASE64 String and Passed Query');
}

app.get('/eval', decodeBase64, (req, res) => {
    // Decode, Run and Respond
    // console.log("Received Code");
    // console.log(req.query);
    
    let result = eval(req.query.encodeJS);
    res.send(`
    <h1>Eval() is Evil😈</h1>
    <br>
    <h2>Result<h2>
    <h3>Input:</h3>
    ${req.query.encodeJS}
    <br>
    <h3>Output:</h3>
    ${result}
    `);
})

app.listen(4321, (req, res) => {
    console.log('Server Started on http://localhost:4321/');
})