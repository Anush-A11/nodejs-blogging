const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    content:{
        type: String,
        required: true,
    },

    createdby:{

        type: mongoose.Schema.Types.ObjectId,
        ref: "users"

    },

    coverimage:{

        type: String,
        required: false
    }
},{timestamps: true})

const Blog = mongoose.model('blogs',blogschema)

module.exports = Blog;
