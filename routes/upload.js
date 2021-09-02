const router = require('express').Router()
const multer = require('multer')
const fs = require('fs')
const {uploadFile, getFileStream} = require('../s3')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, filename:(req, file, cb)=>{
        cb(null, req.body.name)
    }
})

// UPLOAD AN IMAGE TO AWS
const upload = multer({storage})

router.post('/', upload.single('file'), async (req, res)=>{
    const file = req.file
    console.log(req)
    try{
        const result = await uploadFile(file)
        
        //delete the file from server folder
        fs.unlink(`images/${req.body.name}`, (err)=>{
            if(err){console.log(err)}
            else {console.log('Image deleted successfully')}
          })

        res.status(200).json('File has been uploaded!')
    }
    catch(err){
        console.log(err)
    }
}) 

// //GET IMAGE FROM AWS
// router.get('/:key', async (req, res)=>{
//     const key = req.params.key
//     const readStream = getFileStream(key)
//     readStream.pipe(res)
// })

module.exports = router