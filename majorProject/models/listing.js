const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listengSchema = new Schema({
    title: {
        type: String,
        reqired: true
    },
    description: String,
    image: {
        type: String,
        default: "https://my.alfred.edu/zoom/_images/foster-lake.jpg",    
        set: (v) => v === "" ? "https://my.alfred.edu/zoom/_images/foster-lake.jpg" :v
    },
    price: Number,
    location: String,
    country: String
})

const Listing = mongoose.model('Listing', listengSchema);

module.exports = Listing;