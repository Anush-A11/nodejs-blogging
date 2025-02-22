const {validateToken}= require('../utils/auth')

exports.checkforToken = function(req,res,next){

    const token = req.cookies['token']
    if(!token) return next()

    try {
        const userPayload = validateToken(token)

        req.user = userPayload
        next()

    } catch (error) {
        next()
    }




}


exports.onlyGrantAccessTo = function(role){

    return function(req,res,next){
        const token = req.cookies['token']
        if(!token) return res.redirect('/login')
            try {
                const userPayload = validateToken(token)
                if(userPayload.role=== role){
                    req.user = userPayload
                    next()
                }
                else{
                    res.redirect('/')
                }
                
            } catch (error) {
                next()
            }

    }

}





