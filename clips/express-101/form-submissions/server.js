const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`<a href='/form'>Blue Text? Must Click</a>`)
})

app.get('/greet', (req, res) => {
    let username = "Guest";
    if(req.query.username){
        username = req.query.username;
    }
    res.send(`Hewwo, ${username}`);
})

app.post('/greet', (req, res) => {
    let username = "Guest";
    if(req.body.username){
        username = req.body.username;
    }
    res.send(`UwU, ${username}`);
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(4444, () => {
    console.log("Server Started on http://localhost:4444");
})