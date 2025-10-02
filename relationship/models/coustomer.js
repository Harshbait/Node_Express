const mongoose = require('mongoose');
const { Schema } = mongoose

main().then(() => {
    console.log("Connection formed Successfully")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}

const orderSchema = new Schema({
    item: String,
    price: Number
})

const coustomerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
})

// coustomerSchema.pre("findOneAndDelete", async() => {
//     console.log("Pre Middleware")
// })
coustomerSchema.post("findOneAndDelete", async(coustomer) => {
    if(coustomer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: coustomer.orders } })
    }
})

const Order = mongoose.model("Order", orderSchema)
const Coustomer = mongoose.model("Coustomer", coustomerSchema)

// const addCoustomer = async () => {
//     let coust1 = new Coustomer({
//         name: "Rahul",
//     })

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Bounty" });

//     coust1.orders.push(order1)
//     coust1.orders.push(order2)

//     let result = await coust1.save();
//     console.log(result)
// }

// addCoustomer()

//Populate method
const findOrder = async () => {
    let res = await Coustomer.find({}).populate('orders')
    console.log(res[0])
}
findOrder()

// const addOrder = async () => {
//     await Order.deleteMany({})
//     let u = await Order.insertMany([
//         { item: "Samosa", price: 12 },
//         { item: "Chips", price: 10 },
//         { item: "Bounty", price: 70 }
//     ])
//     console.log(u)
// }

// addOrder()

const addCoust = async () => {
    let newCoust = new Coustomer({
        name: "Rayan"
    })

    let newOrder = new Order({
    items: [
        { item: "Rassgula", price: 210 },
        { item: "Peanuts", price: 210 },
        { item: "Laddus", price: 210 }
    ]
});


    newCoust.orders.push(newOrder);

    await newOrder.save();
    await newCoust.save();

    console.log("Added new Coustomer !!")
}

// addCoust()
//Handling Deletion

const deleCoust = async () => {

    let data = await Coustomer.findByIdAndDelete('68de216e4699e7a22d7d70a6')
    console.log(data)
}

deleCoust()