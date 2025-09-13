const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection successful")
}).catch((e) => console.log(e))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    console.log("Hello FRom Amazon DB")
}


//Valid syntaxt of Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price is too Loo for amazon Selling!!"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["Frictional", "Non-Frictional"]
    },
    ganre: [String]
})

const Book = mongoose.model("Book", bookSchema)

// let book1 = new Book({
//     title: "Superman",
//     author: "James Gunnn!!",
//     price: 2500
// })

// Book.insertMany([
//     // { title: "Gone Girl", author: "Harper lee!", price: "200" },
//     { title: "Payfone", author: "Stan lee!", price: "5200", category: "Frictional", ganre: "Based On True Story"},
//     { title: "Batman", author: "Frank Miller", price: "8200", category: "Non-Frictional", ganre: ["I am Batman", "Superhero", "comics", "Dective", "I am Vengence"]},

// ])

// book1.save().then((res) => {
//     console.log(res)
// }) .catch((e) => {
//     console.log(e)
// })

// Book
//     .findByIdAndDelete('68c458a6839a7f434768274b')
//     .then((w) => { 
//         console.log(w)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

Book
    .findByIdAndUpdate( '68c4664038d5fff4947e9753', {price: -89999}, {runValidators: true})
    .then((w) => { console.log(w) })
    .catch((e) => { console.log(e.errors.price.properties.message) })