const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const cors = require('cors')


const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
dotenv.config()
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('Connected to MongoDB')).catch(e => console.log(e))

app.use('/auth', authRouter)
app.use('/user', userRouter)


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})