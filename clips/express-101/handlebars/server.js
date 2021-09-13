const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
// app.set('view engine', 'jade');
// app.set('view engine', 'ejs');

let tasks = [
    'Be Productive'
]

app.get('/', (req, res) => {
    // Name of View = home.hbs
    res.render('home', {
        title: 'HBS ToDo',
        tasks});
})

app.post('/', (req, res) => {
    tasks.push(req.body.newTask);
    res.redirect('/');
})

app.listen(5555, () => {
    console.log("Server Started on http://localhost:5555");
})