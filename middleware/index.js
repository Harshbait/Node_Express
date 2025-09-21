const express = require('express')
const app = express()
const port = 7000

// app.use((req, res, next) => {
//     let { q } = req.query;
//     console.log(q);
//     console.log("Hii I am middleware");
//     next();
// })

//Utility MiddlewaRE
// app.use((req, res, next) =>{
//     req.time = new Date(Date.now()).toString()     //Readable format a date 
//     console.log(req.method, req.time)       //This is a Logger
//     next()
// })

// app.use with Callback
app.use('/random',(req, res, next) =>{ 
    console.log("I am only for random")
    next()
})

app.get('/', (req, res) => {
    res.send("Yoo");
})
app.get('/random', (req, res) => {
    res.send("This is a random page");
    
})

// 404 page
app.use((req, res) => {
    res.status(404).send("Page is not found")
})

app.listen(port, (req, res) => {
    console.log(`Serever is Rumning in ${port}`)
})