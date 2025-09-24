//Just an Example for a Forbidden error

const express = require('express')
const port = 2000;
const app = express();
const ExpressError = require('./ExpressError')

app.get('/admin', (req, res) => {
    throw new ExpressError(403, "ACCESS to Adin=min is Forbidden")
})

app.listen(port, (req, res) => {
    console.log(`Serever is Rumning in ${port}`)        
})