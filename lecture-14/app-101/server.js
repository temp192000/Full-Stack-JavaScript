const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hewwo, This is a Server Page!")
})

app.get('/welcome', (req, res) => {
    let name = 'Guest';
    if(req.query.user) name = req.query.user;
    res.send(`Hewwo, ${name}!`)
})

app.use('/static', express.static(__dirname + '/public'))

app.listen(4321, () => {
    console.log('Server Started on http://localhost:4321');
})