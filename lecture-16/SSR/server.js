const express = require('express');
const app = express();

const appRoute = require('./routes/app');

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/taskmanager', appRoute)

app.listen(4444, () => {
    console.log('Server Started on http://localhost:4444');
})