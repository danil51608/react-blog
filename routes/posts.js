const Post = require("../models/Post");
const router = require('express').Router();

// CREATE NEW POST
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (e) {
    res.status(500).send(e);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});
        res.send(200).json(updatedPost);
      } catch (e) {}
    } else {
      res.status(401).json("You can edit only your posts!");
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json('Post deleted successfully')
            } catch(e){
                res.status(500).json(e)
            }
        }
    } catch(e){
        res.status(500).json(e)
    }
})

//GET POST
router.get('/:id', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch(e){
        res.status(500).json(e)
    }
})

//GET ALL POSTS
router.get('/', async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        } else if(catName){
            posts = await Post.find({categories:{
                $in: [{id: catName}]
            }})
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch(e){
        res.status(500).json(e)
    }
})

module.exports = router;
