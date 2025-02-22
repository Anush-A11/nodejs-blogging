const Blog = require('../models/blog')
const Comment = require('../models/comment')

exports.renderBlogpage = function(req,res){

        res.render('createblog',{
            user: req.user
        })

}

exports.createNewblogpost = async function(req,res){

    const {title,content} = req.body

    try {
        const newBlog = await Blog.create({
            content,
            title,
            coverimage: req.file.filename,
            createdby: req.user._id
        })
    
        return res.render('createblog',{
            message: 'Blog Created Successfully'
        })

    } catch (error) {
        return res.render('/create',{
            error,
        })
    }

}

exports.renderblogpostpg = async function(req,res){

    const id = req.params.id
    const blog = await Blog.findById(id).populate('createdby')
    const comments = await Comment.find({blogid:blog._id}).populate('createdby')

    return res.render('blog', {
        
        user: req.user,
        blog,
        comments
    })

}