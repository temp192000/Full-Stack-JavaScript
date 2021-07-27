const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hewwo, World!");
    console.log("Does Logging Works?");
})

function middleware1(req, res, next){
    console.log(req.url);
    next();
}

function middleware2(req, res, next){
    console.log(req.hostname);
    res.send("Server Responded Happily");
}

app.get('/pwease', middleware1, middleware2);


app.listen(3333, () => {
    console.log("Server Started on http://localhost:3333/");
    // console.log("Server Started on http://0.0.0.0:3333/");
})