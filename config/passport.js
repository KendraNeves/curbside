const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');
// var cookieParser = require('cookie-parser');

// JWT cE();-Extracts JWT Cookie to verify user
const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"]
    }
    return token;
}

// Tells Passport we want to use JWT authorization - Protects endpoints from unauthorized access
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    // Verifies if token is legit
    secretOrKey: "Curbside"
}, (payload, done) => {
    // Checks if the user exists
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false);
        if (user)
            return done(null, user);
        else
            return done(null, false)
    });
}));

// SIGNIN CONFIGURATION
// Local Strategy Authentication using verify-callback, email and password, and done function
passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    (email, password, done) => {
        // When a user tries to signin this code runs
        User.findOne({ email },
        ).then(function (dbUser) {
            // If there's no user in the database with given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Email does not match existing account."
                });
            }
            // If there is a user in the database with the given email, but wrong password
            else if (!dbUser.comparePassword(password)) {
                return done(null, false, {
                    message: "Password does not match existing account."
                });
            }
            //  If none of the above, return the user crendentials from db
            return done(null, dbUser);
        });
    }
));


// Previous code for local strategy
// (err,user)=>{
//     // something went wrong with database
//     if(err)
//         return done(err, { message: 'Database is unavaliable.' });
//     // If no user exist
//     if(!user)
//         return done(null, false, { message: 'Email does not match existing account.' });
//     // checks if password is correct
//     user.comparePassword(password,done);
// }





// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


