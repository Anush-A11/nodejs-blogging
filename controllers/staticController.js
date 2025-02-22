const Blog = require('../models/blog')


exports.renderHomePage = async function(req,res){

        const allBlogs = await Blog.find({})
    
        res.render('home',{

                user: req.user,
                blogs: allBlogs
        
        
        })
    
}



exports.renderLoginPage = function(req,res){
        if(req.user) 
                return res.redirect('/')
        else
                return res.render('login')
    
}

exports.renderSignupPage = function(req,res){

        if(req.user) return res.redirect('/')


        res.render('signup')

}