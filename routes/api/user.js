const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../../config/passport');
const JWT = require('jsonwebtoken');
const User = require('../../models/user')
const Listing = require('../../models/listing');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// User is matched with JWT by id
const signToken = userID => {
    return JWT.sign({
        iss: "Curbside",
        sub: userID
    }, "Curbside", { expiresIn: "12h" });
}

// =====================================================


// Express.Router sends a get request to '/authenticated' path if the user authentication is true
userRouter.get('/authenticated', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, email, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { email, role } });
    }
});

// ======================================================

// Express.Router sends a post response from server to client-side
userRouter.post('/signup', (req, res) => {
    const { email, password, role } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occurred.", msgError: true } });
        if (user)
            res.status(400).json({ message: { msgBody: "Username is already taken.", msgError: true } });
        // Confirming a new user has been created
        else{
            const newUser = new User({email,password,role});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message: {msgBody: "Error has occurred.", msgError: true} });
                else
                    res.status(201).json({message : {msgBody: "Account successfully created!!", msgError: false} });
            });
        }
    })
    // Test - Pulls out data from User inputs
    User.create(req.body)
    .then(user => {
        console.log("SIGNUP RAN SUCCESSFULLY!")
        console.log(user);
        console.log(req.body)
    });


    // Adding bcrypt and hash
    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(newUser.password, salt, (err, hash) => {
    //         if (err) throw err;
    //         // Saves new user
    //         newUser.save(err => {
    //             if (err)
    //                 res.status(500).json({ message: { msgBody: "Error has occured.", msgError: true } });
    //             else
    //                 res.status(201).json({ message: { msgBody: "Account successfully created!", msgError: false } });
    //         }).then(user => {
    //             res.json({
    //                 user: {
    //                     id: user.id,
    //                     email: user.email
    //                 }
    //             });
    //         });
    //     });
    // });
});


// ==================================================================

userRouter.get('/signin', (req, res) => {
    const { email, password, role } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occurred.", msgError: true } });
        if (user)
            res.status(200).json({ message: { msgBody: "You have successfully logged in!!", msgError: false } });
        // Confirming a new user has been created
    });
});


// PREVIOUS /SIGNIN ROUTE
// userRouter.get('/signin', passport.authenticate('local', {session : false}),
// (req, res)=>{
//     console.log("This is REQ", req);
//     if(req.isAuthenticated()){
//         const { _id, email, role } = req.user;
//         console.log(req.user)
//         const token = signToken(_id);
//         res.cookie('access_token', token, { httpOnly: true, sameSite: true });
//         res.status(200).json({ isAuthenticated: true, user: { email, role } });
//     } 
// });


// ====================================================================

userRouter.get('/signout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { email: "", role: "" }, success: true });
});

// Creates new listing
// userRouter.get('/listing', passport.authenticate('jwt', { session: false }), (req, res) => {
//     const listing = new Listing(req.body);
//     listing.save(err => {
//         if (err)
//             res.status(500).json({ message: { msgBody: "Error has occurred.", msgError: true } });
//         else {
//             req.user.listings.push(listing);
//             req.user.save(err => {
//                 if (err)
//                     res.status(500).json({ messge: { mdgBody: "Error has occured.", msgError: true } });
//                 else
//                     res.status(200).json({ message: { msgBody: "Successfully created new listing!", msgError: false } });
//             });
//         }
//     })
// });

// userRouter.get('/listings', passport.authenticate('jwt', { session: false }), (req, res) => {
//     const User = require('../../models/user');
//     User.findById({ _id: req.user._id }).populate('listings').exec((err, document) => {
//         if (err)
//             res.status(500).json({ message: { msgBody: "Error has occurred.", msgError: true } });
//         else {
//             res.status(200).json({ listings: document.listings, authenicated: true });
//         }
//     });
// });

// // admin panel (for future use)
// userRouter.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
//     if (req.user.role === 'admin') {
//         res.status(200).json({ message: { msgBody: "You are an admin", msgError: false } });
//     } else {
//         res.status(403).json({ message: { msgBody: "Scram you impasta!!", msgError: true } });
//     }
// });

userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { email, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { email, role } });
});

module.exports = userRouter;
