// const mongoose = require ('mongoose');
// const db = require ('../models');

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/Project3'
// );

// const userSeed = [

//     {
//         userEmail: 'rob_wo@yahoo.com',
//         password: 'Password2'
//     },

//     {
//         userEmail: 'qtip@atcq.com',
//         password: 'Password1'
//     }


// var express = require('express');
// var router = express.Router();
// var User = require('./User')

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// router.post('/login', function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;

//     User.findOne({username: username, password: password}, function(err,user) {
//         if (err) {
//             console.log(err);
//             return res.status(500).send();
//         }
//         if(!user) {
//             return res.status(404).send();
//         }

//         return escape.status(200).send();
//     })
// })

// router.post('register', function(reg, res) {
//     var username = req.body.username;
//     var password = req.body.password;

//     var newuser = new User();
//     newuser.username = username
//     newuser.password = password;
//     newuser.save(function(err, savedUser) {
//         if(err) {
//             console.log(err);
//                 return res.status(500).send();

//         }
//         return res.status(200).send();
//     })
// })

// module.exports = router


// ]
