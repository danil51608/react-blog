const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const categoryRouter = require('./routes/categories')
const cors = require('cors')
const path = require('path')
const multer = require('multer')


const app = express();
app.use(cors());

//setting a port
const PORT = process.env.PORT || 5000;
dotenv.config()
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('Connected to MongoDB')).catch(e => console.log(e))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, filename:(req, file, cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage})
app.post('/upload', upload.single('file'), (req, res)=>{
    res.status(200).json('File has been uploaded!')
})

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/category', categoryRouter)

if(process.env.NODE_ENV === 'production'){
     app.use(express.static('client/build'))
}

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})