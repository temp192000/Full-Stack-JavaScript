const express = require('express');
const taskRoute = require('./app')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send("Hewwo");
});

app.use('/public', express.static( __dirname + '/public'));
app.use('/taskmanager', taskRoute);

app.listen(4444, () => {
    console.log('Server Started on http://localhost:4444');
})