const Category = require('../models/Category')
const router = require('express').Router()

// CREATE CATEGORY
router.post('/', async (req, res) => {
    const newCategory = new Category(req.body)
    try{
        await newCategory.save()
        res.status(200).send(newCategory)
    }
    catch(e){
        res.status(500).json(e)
    }
})

//GET CATEGORIES
router.get('/', async (req, res) => {
    try{
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch(e) {
        res.status(500).json(e)
    }
})

module.exports = router