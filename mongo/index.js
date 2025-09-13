const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection successful")
}).catch((e) => console.log(e))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Hello FRom DB")
}

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema);

// User.insertMany([
//     {username: "Ironman", email: "TonyStark3000@gmail.com", age: 50},
//     {username: "Spiderman", email: "PeterParker2@gmail.com", age: 23},
//     {username: "Hulkk", email: "bruceBanner2@gmail.com", age: 45},
//     {username: "Thor", email: "ThorFukiisonEditedByTony@gmail.com", age: 1000}
// ]).then((res) => {
//     console.log(res)
// })

// const user1 = new User({
//     username: "Superman",
//     email: "Clark1890@gmail.com",
//     age: 10292920
// })
// const user2 = new User({
//     username: "Batman",
//     email: "bruceWayne28@gmail.com",
//     age: 28
// })

// user1.save()
// user2.save().then((res) => {
//     console.log(res)
// }).catch((err)=> console.log(err))

//FIND

// User.find({ age: {$gt: 40} }).then((res) => {
//     console.log(res.username)
//     console.log(res
//         .email)
// }) .catch((err) => {
//     console.log(errr)
// })

// User.updateOne({ username: 'Superman' }, { username: 'Clark Kent' } ).then((res) => {
//     console.log(res);
// }) .catch((err) => console.log(err))

// User.updateMany({ age: { $lt: 60} }, { age: 70 } ).then((res) => {
//     console.log(res);
// }) .catch((err) => console.log(err))

// User.findOneAndUpdate({ username: 'Batman' }, { age: 28 }, { new: true})
//     .then((res) => {
//         console.log(res)
//     }) .catch((e) => {
//         console.log(e)
//     })

// User.findOneAndUpdate(
//     { username: 'Ironman' },  // filter
//     { age: 38 },               // update
//     { new: true }              // return the updated document
// )
// .then((res) => {
//     console.log(res);
// })
// .catch((e) => {
//     console.log(e);
// });

// User.findByIdAndUpdate(
//     '68c159e81b10200e9eebeb88',
//     { age: 30 },
//     { new: true }
// )
// .then(res => console.log(res))
// .catch(e => console.log(e));

//Similar to Delete

User.deleteMany( {age: 70} ).then((res) => {
    console.log(res)
}) .catch((e) =>{ console.log(e) })
