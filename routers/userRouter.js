const express = require('express')
const routes = express.Router()
const { handleUserLogin, handleUserSignup, renderUserBlogs }= require('../controllers/userController')

routes.get('/logout',(req,res)=>{

    return res.clearCookie('token').redirect('/')
})

routes.post('/login', handleUserLogin)

routes.post('/signup',handleUserSignup)

routes.get('/blogs', renderUserBlogs)
module.exports = routes;