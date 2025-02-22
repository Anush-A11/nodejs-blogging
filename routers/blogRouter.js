const express = require('express')
const routes = express.Router()
const multer = require('multer')
const {renderBlogpage,createNewblogpost, renderblogpostpg} = require('../controllers/blogController')
const {onlyGrantAccessTo}=require('../middlewares/auth')
const Blog = require('../models/blog')

const storage = multer.diskStorage({

    destination: (req,file,cb)=>{
        cb(null, ('./public/uploads/'))
    },
    
    filename: (req, file, cb) => {
        const timestamp = Date.now()
        cb(null, timestamp + '-' + file.originalname.replace(/\s+/g, '_'))
    }

})

const upload = multer({storage})

routes.get('/create',renderBlogpage)

routes.post('/create',upload.single('coverimage'),createNewblogpost)

routes.get('/view/:id',renderblogpostpg)

routes.get('/delete/:id', onlyGrantAccessTo('Admin'),async function(req,res){
    await Blog.deleteOne({

        _id: req.params.id

    })
    res.redirect('/')
} )

module.exports = routes;