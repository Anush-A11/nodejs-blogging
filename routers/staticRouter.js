const express = require('express')
const routes = express.Router()
const {renderLoginPage, renderHomePage, renderSignupPage} = require('../controllers/staticController')

routes.get('/',renderHomePage)

routes.get('/login', renderLoginPage)

routes.get('/signup',renderSignupPage)

module.exports = routes;