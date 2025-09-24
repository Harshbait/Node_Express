const mongoose = require('mongoose')
const Chat = require('./models/chats')


main()
    .then(() => { 
        console.log("Connection Successfull" )
    })
    .catch(e => console.log(e))

async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatapp')
}

let allChats = [
  {
    from: "Alice",
    to: "Bob",
    messg: "Hey Bob! How’s your day going?",
    created_at: new Date("2024-09-13T10:30:00Z")
  },
  {
    from: "Bob",
    to: "Alice",
    messg: "Hi Alice! It’s going great, just finished work.",
    created_at: new Date("2024-09-13T10:32:00Z")
  },
  {
    from: "Charlie",
    to: "David",
    messg: "Are we still on for the movie tonight?",
    created_at: new Date("2024-09-13T15:00:00Z")
  },
  {
    from: "David",
    to: "Charlie",
    messg: "Yes! Let’s meet at 7 PM at the theatre.",
    created_at: new Date("2024-09-13T15:05:00Z")
  },
  {
    from: "Eve",
    to: "Frank",
    messg: "Don’t forget to bring the documents tomorrow.",
    created_at: new Date("2024-09-13T18:20:00Z")
  }
]

Chat.insertMany(allChats)