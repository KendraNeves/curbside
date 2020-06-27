// const router = require("express").Router();
// const multer = require('multer');

// //import multer. Where we want to save our files
// var storage = multer.diskStorage({
//     //folder where files are stored after upload
//     destination: (req, file, cb) => {
//         cb(null, '../../uploadStorage/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}_${file.originalname}`)
//     },
//     //restricts type of file uploaded
//     fileFilter: (req, file, cb) => {
//         if (ext !== '.jpeg' || ext !== '.png') {
//             return cb(res.status(400).end('only jpg, png are allowed'), false);
//         }
//         cb(null, true)
//     }
// });

// var upload = multer({ storage: storage}).single("file")


// //item image store
// router.post("/imageUpload", (req, res)=>{

//     upload(req, res, err => {
//         if(err) return res.json({success: false, err})
//         return res.json({success: true, image: res.req.file.path, fileName: res.req.file.filename})
//     })
// });

//     //after uploading image from computer. Save it into server


//     //multer library , npm install multer --save

// module.exports = router;