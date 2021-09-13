const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<a href="./greet">Blue Text? Must Click👆</a>`);
});

app.get('/greet', (req, res) => {
    res.send(`{
        URL: http://localhost:4444,
        city: Name of a City,
        username: Name of a User
    }`)
})

app.get('/:city/:username', (req, res) => {
    res.send(`Welcome to ${req.params.city}, Mr./Mrs. ${req.params.username}!`)
});

app.listen(4444, () => {
    console.log("Server Started on http://localhost:4444");
})