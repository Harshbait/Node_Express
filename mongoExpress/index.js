const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const PORT = 9000;
const Chat = require('./models/chats')
const methodOverride = require('method-override')

app.use(methodOverride("_method"))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))

main()
    .then(() => { 
        console.log("Connection Successfull" )
    })
    .catch(e => console.log(e))

async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatModel')
}

app.get('/chats', async(req, res) => {

    //Chat.find() is a Asyncrous function cause It is taking data from Database
    let chats = await Chat.find()
    console.log(chats)
    res.render('index.ejs', { chats })
})

app.get('/chats/new', (req, res) => {
    res.render('new')
})

app.post('/chats', (req, res) => {
    let { form, msg, to }= req.body; 
    let newChat = new Chat({
        from: form,
        messg: msg,
        to: to,
        created_at: new Date(),
        updatedAt: 'updated_at'
    })
    newChat.save().then(() => {
        console.log("O YEAH!!")
    }).catch((e) => {
        console.log('Error is Occured')
    })
    res.redirect('/chats')
})

app.get('/chats/:id/edit', async(req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id)
    res.render('edit', {chat})
})

//Update ROute
app.put("/chats/:id", async(req, res) => {
    let { id } = req.params;
    let { messg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {messg: newMsg}, {runValidators: true, new: true});
    res.redirect('/chats')
    console.log(updatedChat)
})

//Delete Route
app.delete('/chats/:id', async(req, res) => {
    let { id } = req.params;
    let deleted = await Chat.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect('/chats');
})

// app.use('/', (req, res)=> {
//     res.send('Root is working')
// })

app.listen(PORT, () => {
    console.log(`Server is listing on ${PORT}`)
})