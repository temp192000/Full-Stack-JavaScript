const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hewwo, World!")
})

app.use('/static', express.static(__dirname + '/public'))

app.listen(4321, () => {
    console.log('Server Started on http://localhost:4321');
})