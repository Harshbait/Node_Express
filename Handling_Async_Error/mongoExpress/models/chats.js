const mongoose = require('mongoose')
const { type } = require('os')

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    messg: {
        type: String,
        maxLength: 50 
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat



