const express = require('express')
const mongoose = require('mongoose')
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/anush')
.then(()=>console.log('MongoDb Connected'))
.catch((err)=>{console.log('MongoDb Connection Error',err)})

const { checkforToken } = require('./middlewares/auth')
const userRouter = require('./routers/userRouter')
const blogRouter = require('./routers/blogRouter')
const staticRouter = require('./routers/staticRouter')
const commentRouter = require('./routers/commentRouter')
const path = require('path');
const cookieParser = require('cookie-parser');

// CONFIGURATIONS

app.set('view engine', 'ejs')
app.set('views',path.resolve('views'))

// MIDDLEWARES

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('./public')))
app.use(cookieParser())
app.use(checkforToken)

// ROUTES

app.use('/user', userRouter)
app.use('/blog', blogRouter)
app.use('/', staticRouter)
app.use('/comment',commentRouter)

// LISTEN

app.listen(5000,()=>{
    console.log('Server Listening on PORT 5000!');

})

