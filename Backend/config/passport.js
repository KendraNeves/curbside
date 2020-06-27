const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt');
const User = require('../models/user');

// JWT
const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies){
        token=req.cookies["access_token"]
    }
    return token;
}

// authorization
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "Curbside"
},(payload,done)=>{
    User.findById({_id: payload.sub},(err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null,user);
        else
            return done(null,false)
    });
}));


// CONFIGURATION
// authenticated local strategy using username and passwor
passport.use(new LocalStrategy((username,password,done)=> {
    User.findOne({username},(err,user)=>{
        // something went wrong with database
        if(err)
            return done(err);
        // If no user exist
        if(!user)
            return done(null, false, { message: 'Incorrect password.' });
        // checks if password is correct
        user.comparePassword(password,done);
    })
}))
