const route = require('express').Router();

let taskList = [
    {task: "Be Productive"}
]

route.get('/', (req, res) => {
    res.render('index', {taskList})
})

route.post('/', (req, res) => {
    taskList.push({
        task: req.body.newTask
    })

    res.redirect('/taskmanager');
    // res.redirect('.');
})

module.exports = route