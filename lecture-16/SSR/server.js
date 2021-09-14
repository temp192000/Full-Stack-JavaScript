const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hewwo!")
});

app.listen(4444, () => {
    console.log('Server Started on http://localhost:4444');
})