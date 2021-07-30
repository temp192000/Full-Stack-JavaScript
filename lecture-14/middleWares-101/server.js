const express = require('express');
const app = express();

function middleWare1(req, res, next){
    console.log("Pre-MiddleWare1");
    next();
    console.log("Post-MiddleWare1");
}

function middleWare2(req, res, next){
    console.log("Pre-MiddleWare2");
    next();
    console.log("Post-MiddleWare2");``
}

function middleWare3(req, res, next){
    console.log("Pre-MiddleWare3");
    next();
    console.log("Post-MiddleWare3");
}

app.get('/', middleWare1, middleWare2, middleWare3, (req, res) => {
    console.log("Pre-Response");
    res.send("Hewwo");
    console.log("Post-Response");
})

app.listen(4321, () => {
    console.log('Server Started on http://localhost:4321/');
})