const path = require('path');
const multer = require('multer');

//import multer. Where we want to save our files
const storage = multer.diskStorage({
    //folder where files are stored after upload
    destination: (req, file, cb) => {
        //folder that holds all the pictures uploaded
        cb(null, '/uploadStorage/')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    },
    //restricts type of file uploaded
    fileFilter: (req, file, cb) => {
        if (ext !== '.jpeg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
});

var upload = multer({ 
    storage: storage,
    fileFilter: (req, file, callback) => {
        if(
            file.mimetype == "image/png" || 
            file.mimetype == "image/jpg"
        ){
            callback(null, true)
        }else{
            console.log('only jpg and png files supported!')
            callback(null,  false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});


//item image store


    //after uploading image from computer. Save it into server


    //multer library , npm install multer --save

module.exports = upload;