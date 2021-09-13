const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hewwo, Stranger :)</h1>`)
});

app.get('/greet', (req, res) => {
    let username = "Guest";
    if(req.query.username){
        username = req.query.username
    }
    res.send(`Hewwo, ${username}`);
});

app.listen(4444, () => {
    console.log("Server Started on http://localhost:4444");
});