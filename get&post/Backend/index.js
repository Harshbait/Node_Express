const express = require('express')
const app = express()
let port = 8080;

//For url encoded data
app.use(express.urlencoded({ extended: true }));

//For json format data
app.use(express.json())

app.get('/register', (req, res) => {
    let { user, password } = req.query
    res.send(`Welcome User from GET Response ${user} !`)
})
app.post('/register', (req, res) => {
    let { user, password } = req.body
    res.send(`Welcome User from POST Response ${user} !`)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})