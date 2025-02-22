const mongoose = require('mongoose')

const commentschema = new mongoose.Schema({


    content:{
        type: String,
        required: true
    },

    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"

    },

    blogid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogs"
    }




},{timestamps: true})

const Comment = mongoose.model('comments',commentschema)

module.exports = Comment;