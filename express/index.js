const express = require('express');
const app = express();
let port = 3000

app.listen(port, ()=> {
    console.log(`App is listining on port ${port}`)
})

//Sending a Response
app.use((req, res) =>{
    console.log('Reequest has been sent')
    res.send('<h1>This Response using H1 Tag</h1> <ul> <li>Node</li> <li>Express</li></ul> ')
})

// app.get('/', (req, res) => {
//     res.send("You contacted root path")
// })

// app.get('/home', (req, res) => {
//     res.send("You contacted home path")
// })

// app.get('/about', (req, res) => {
//     res.send("You contacted about path")
// })

// app.get('/search', (req, res)=>{
//     console.log()
//     let {q} = req.query
//     res.send(`Send result is: ${q}`)
// })
// app.get('/:username', (req, res) => {
//     let {username} = req.params;
//     res.send(`Hello, I am ${username}`)
// })


// app.all('*', (req, res) => {
//     res.send("This path does not exist")
// })