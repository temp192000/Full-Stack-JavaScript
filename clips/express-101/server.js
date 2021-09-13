const express = require('express')
// console.log(typeof express); //a function

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue;">Hewwo</h1>')
})


app.listen(4444, () => {
    console.log("Server Started on http://localhost:4444");
    // console.log("Server Started on http://0.0.0.0:4444");
    // console.log("Server Started on http://127.0.0.1:4444");
    // console.log("Server Started on http://<IP Address>:4444");
})