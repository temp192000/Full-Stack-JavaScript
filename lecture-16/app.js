const route = require('express').Router()

let taskList = []

route.get('/', (req, res) => {
    res.send(taskList);
})
route.post('/', (req, res) => {
    taskList.push({
        task: req.body.task
    })

    res.send(taskList);
})

module.exports = route