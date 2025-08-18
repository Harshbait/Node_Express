const express = require('express');
const app = express();
const port = 8000;
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

//Our data to make an api we cannot use const key word, If we want to delete any data
let posts = [
    {
        id: uuidv4(),
        username: 'Hasrsh',
        content: 'I am doing coding, To secures future'
    },
    {
        id: uuidv4(),
        username: 'Thorkell ',
        content: 'I Love to Fight'
    },
    {
        id: uuidv4(),
        username: 'Deidara',
        content: 'I love to, Bomb people'
    },

]


//In GET Request we get information inside the req.parms or req.query
app.get('/posts', (req, res)=>{
    res.render("index", {posts})
})

app.get('/posts/new', (req, res) =>{
    res.render('new')
})

//In POST Request we get information inside the req.body
app.post('/posts', (req, res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content})
    res.redirect('/posts')
})

app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    console.log(id)
    let post = posts.find((p)=> id === p.id);
    res.render("show", { post })
})

app.patch('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content
    console.log(newContent)
    let post = posts.find((p)=> id === p.id);
    post.content = newContent
    res.redirect('/posts')
})

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p)=> id === p.id);

    res.render('edit.ejs', { post })
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id)
    res.redirect('/posts')
})

app.listen(port, ()=> {
    console.log(`App is listing on ${port}`)
})
