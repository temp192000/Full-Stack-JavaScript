const express = require('express');
const app = express();

let pageViews = 0;

app.get('/', (req, res) => {
    // console.log(req.protocol, req.hostname, req.url);
    // res.send("<h1>Hewwo, I'm from Server</h1>");
    // res.send("Howdy?")
    // console.log("I'm gonna go to Console");

    pageViews++;
    res.sendFile(__dirname + '/files/index.html')
})

app.get('/views', (req, res) => {
    res.send("Visitor Count = " + pageViews);
})

app.listen(3333)