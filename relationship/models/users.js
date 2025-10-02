const mongoose = require('mongoose');
const { Schema } = mongoose

main().then(() => {
    console.log("Connection formed Successfully")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}

const userSchema = new Schema({
    username: String,
    address: [{
        _id: false,
        location: String,
        city: String
    }
    ]
})

const User = mongoose.model("User", userSchema)
const useraddres = async () => {
    let user1 = new User({
        username: "Sherlockhomes",
        address: [{
            
            location: '221B Bakers Street',
            city: 'London'
        }
    ]
    })
    user1.address.push({
        location: "P2B3 Wallstreet", city: "London"
    })
    let result = await user1.save()
    console.log(result)
}

useraddres()