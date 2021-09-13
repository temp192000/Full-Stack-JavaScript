const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

let tasks = [
    'Be Productive'
]

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })

app.get('/', (req, res) => {
    let taskList = tasks.map(t => `<li>${t}</li>`).join('\n');

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR ToDo</title>
    </head>
    <body>
        <form action="/" method="POST">
            <input name="newTask" type="text">
            <button type="submit">➕</button>
        </form>
        <ul>
        ${taskList}
        </ul>
    </body>
    </html>
    `)
})

app.post('/', (req, res) => {
    tasks.push(req.body.newTask);
    res.redirect('/');
    // res.send(`New Task added = ` + req.body.newTask);
})

app.listen(5555, () => {
    console.log("Server Started on http://localhost:5555");
})