const express = require('express');
const app = express();
const path = require('path')

const port = 8080;

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public/css')))

app.set('view engine', 'ejs')

app.listen(port, (req, res) => {
    console.log(`Server Listen on ${port}`)
})

app.get('/ig/:username', (req, res) =>{
    let { username } = req.params;
    let instaData = require('./data.json');
    let data = instaData[username]
    console.log(data)
    if(data){
        res.render("insta.ejs", {data})
    } else {
        res.render('notFound.ejs')
    }
})