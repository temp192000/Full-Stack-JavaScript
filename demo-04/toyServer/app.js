const express = require('express');
const app = express();

let taskList = [
    'task-1',
    'task-2',
    'task-3',
    'task-4',
]

app.get('/', (req, res) => {
    let taskArray = ''
    for(let i = 0; i < taskList.length; i++){
        taskArray += '<li>' + taskList[i] + '</li>'
    }

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>To Do App</title>
    </head>
    <body>
        <h1>Server Side ToDo App</h1>

        <!-- <input type="text" id="in-task">
        <button id="btn-add">➕</button> -->    
        
        <form action="add">
            <input name="newTask">
            <button type="submit">➕</button>
        </form>
        <ul>
            ${taskArray}
        </ul>
    </body>
    </html>
    `

    res.send(html)
})

app.get('/add', (req, res) => {
    // console.log(req.query);
    taskList.push(req.query.newTask)
    res.redirect('/')
})
app.listen(4444)