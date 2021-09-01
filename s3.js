require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const bucketName = process.env.AWS_BUCKET_NAME
const fs = require('fs')


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})


//upload file to aws
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    //params for aws post request
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    
    // upload and return promise
    return s3.upload(uploadParams).promise()
}

function getFileStream(fileKey){

    //params for aws get request
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}

module.exports = {uploadFile, getFileStream}

