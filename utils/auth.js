const jwt = require('jsonwebtoken')
const User = require('../models/user')
const JWT_SECRET = 'Ayyappan'

async function generateTokenforUser(id){

    const user = await User.findById(id)

    const payload = {
        _id: user._id,
        email: user.email,
        fullname: user.fullname,
        role: user.role
    }
    
    const token = jwt.sign(payload, JWT_SECRET)

    return token;


}

function validateToken(token){
    return jwt.verify(token,JWT_SECRET)
}

module.exports = {generateTokenforUser,validateToken}









