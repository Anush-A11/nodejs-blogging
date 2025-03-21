const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullname:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true
    },

    role:{
        type: String,
        default: "Normal"

    },

    profilepicture:{
        type: String,
    }

},{timestamps: true})

const User = mongoose.model('users', userSchema)

module.exports = User;


