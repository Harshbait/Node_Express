const express = require('express')
const app = express();
const port = 8080;
const path = require('path')

//
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res)=>{
    res.render('home.ejs')
    console.log("Hashhh")
})

app.listen(port, ()=>{
    console.log(`Port is listing on ${port}`)
});

app.get('/rolldi', (req, res) => {
    RAndom = Math.floor(Math.random() * 6) + 1
    res.render('Rolldice', {RAndom})
})

app.use('/ig/:username', (req, res) => {
    const folowers = ['Adam Burger', 'Bob Yeger', 'Yohan Niess', 'Hitachi Bajaj']
    const {username} = req.params;
    res.render('insta.ejs', {username, folowers})
}) 