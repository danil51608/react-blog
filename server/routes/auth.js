const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

//REGISTER
router.post('/register', async (req, res) => {
    try{
        const userExist = await User.findOne({username: req.body.username})
        if(userExist){
            return res.status(405).json({customMessage: 'Picked username is already in use'})
        }
        const salt = await bcrypt.genSalt(8)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(error){
        res.status(500).json(error);
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json({customMessage: `User doesn't exist`})
        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json({customMessage: 'Wrong credetials!'})
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }catch(error) {
        res.status(500).json(error);
    }
})

module.exports = router;