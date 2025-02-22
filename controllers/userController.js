const User = require('../models/user')
const { generateTokenforUser } = require('../utils/auth')
const cookieparser = require('cookie-parser')
const Blog = require('../models/blog')
exports.handleUserLogin = async function(req,res){

    const {email,password} = req.body
    
    try {

        if(!email || !password) throw new Error('Email and Password are required')

        const user = await User.findOne({email})
        
        if(!user) throw new Error(`User with ${email} does not exist`)
        
        if(user.password !== password) throw new Error('Password Incorrect')

        //Token

        const token = await generateTokenforUser(user._id)

        console.log(token)

        return res
        
            .cookie('token',token)
        
            .redirect('/')

    } catch (error) {

        return res.render('login',{
            error
        })

    }
}

exports.handleUserSignup = async function(req,res){

    const {fullname,email,password} = req.body

    try {

        if(!fullname) throw new Error('Full Name is Required')
        if(!email) throw new Error('Email is Required')
        if(!password || password.length<5) throw new Error('Password is required. Min 5 characters')
        
        const user = await User.create({fullname,email,password})
        const token = await generateTokenforUser(user._id)

        res.cookie('token',token).redirect('/')

    } catch (error) {
        res.render('signup',{error})
    }

}


exports.renderUserBlogs = async function(req,res){
    if(!req.user) return res.redirect('/login')
    
    const blogs = await Blog.find({createdby: req.user._id})
    
    return res.render('userBlogs',{
        user: req.user,
        blogs
    })
}

















