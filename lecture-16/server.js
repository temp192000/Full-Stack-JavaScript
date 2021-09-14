const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hewwo");
});

app.use('/public', express.static('public'));

app.listen(4444, () => {
    console.log('Server Started on http://localhost:4444');
})