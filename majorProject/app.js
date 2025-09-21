const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
let PORT = 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(() => {
    console.log("Connected to the database")
}).catch((e) => {
    console.log(`Error is: ${e}`)
})


async function main() {
    await mongoose.connect(MONGO_URL)
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate)
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req,res)=>{
    res.send("Hii am airbnb ")   
})

//Index Route
app.get('/listings', async(req, res) => {
    let allListings = await Listing.find({});
    res.render('listings/index', {allListings})
})

//New Route
app.get('/listings/new', (req, res) => {
    res.render('listings/new')
})

//show Route
app.get('/listings/:id', async(req, res) => {
    let { id } = req.params;
    let list = await Listing.findById(id)
    console.log(list)
    res.render('listings/show', {list})
})

app.post('/listings', async(req,res) =>{
    let listings = req.body.listings;
    const newListining = new Listing(listings)
    await newListining.save()
    res.redirect('/listings')
})

app.get('/listings/:id/edit', async(req,res) =>{
    let { id } = req.params;
    let list = await Listing.findById(id)
    res.render('listings/edit', {list})
})
app.put('/listings/:id', async(req,res) =>{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listings})
    res.redirect(`/listings/${id}`)
})

app.delete('/listings/:id', async(req,res) => {
    let { id } = req.params;
    let deleteList = await Listing.findByIdAndDelete(id);
    console.log(deleteList)
    res.redirect('/listings')
})



// app.get('/testListing', async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My new Vannila ice",
//         discription: "Box",
//         price: 1200,
//         location: "Mumbai, Sawantwadi",
//         country: "India"
//     })

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successfull")
// })


app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})