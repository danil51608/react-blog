const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const fs = require("fs");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(400).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
      try {
        const user = await User.findById(req.params.id)
      try {
        await Post.deleteMany({username: user.username})
        await User.findByIdAndDelete(req.params.id);

        fs.unlink(`images/${user.profilePic}`, (err)=>{
          if(err){throw err}
          else {console.log('Image deleted successfully')}
        })

        res.status(200).json("User has been deleted");
      } catch (e) {
        res.status(500).json(e)
      }
    } catch (e) {
        res.status(500).json(e)
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});


//GET USER
router.get('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const {password, ...others} = user._doc
            res.status(200).json(others)
        } catch(e){
            res.status(500).json(e)
        }
    } else {
        res.status(401).json('You can get only your profile!')
    }
})

module.exports = router;
