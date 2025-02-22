const express = require('express')
const routes = express.Router()

const Comment = require('../models/comment')

routes.post('/create', async function(req,res){

    if(!req.user) return res,json({error: 'You are not logged in'})
    const {content,blogid}= req.body
    await Comment.create({blogid,content,createdby:req.user._id})
    return res.json({message: "Success"})

})




module.exports = routes;

