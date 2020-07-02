const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');

// JWT cE();-Extracts JWT Cookie Token to verify user
const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies){
        token=req.cookies["access_token"]
    }
    return token;
}

// JWT authorization - Protects endpoints from unauthorized access
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    // Verifies if token is legit
    secretOrKey: "Curbside"
},(payload,done)=>{
    // Checks if the user exists
    User.findById({_id: payload.sub},(err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null,user);
        else
            return done(null,false)
    });
}));


// LOGIN CONFIGURATION
// authenticated local strategy using verify callback, username and password, and done function
passport.use(new LocalStrategy((username,password,done)=> {
    User.findOne({username},(err,user)=>{
        // something went wrong with database
        if(err)
            return done(err, { message: 'Database is unable.' });
        // If no user exist
        if(!user)
            return done(null, false, { message: 'Incorrect password.' });
        // checks if password is correct
        user.comparePassword(password,done);
    })
}))
