const path = require("path");
const router = require("express").Router();
const User = require('../lib/User');
const apiRoutes = require("./api");
var mongoose = require ('mongoose');

// API Routes
router.use("/api", apiRoutes);

router.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../build/index.html")); //   ../client/build/index.html
  next();
});

//schema

var mySchema = mongoose.Schema({
  userEmail: String,
  password: String
});

//login
router.post('login', function(reg, res) {
  var userEmail = req.body.username;
  var password = req.body.password;

  User.findOne({userEmail: userEmail, password: password}, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if(!user) {
      return res.status(404).send();
    }
    return res.status(200).send();
  })
})


//User routes
router.post('/register', function (req, res){
  var userEmail = req.body.username;
  var password = req.body.password;

  var newuser = new User();
  newuser.userEmail = userEmail;
  newuser.password = password;
  newuser.save(function(err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).send();
  
    }
    res.status(200).send();
  })
})

module.exports = router;
