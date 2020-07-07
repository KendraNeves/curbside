const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Cookie Parser Middleware
app.use(cookieParser());
// require('./models/mlab');

// Body-Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// User route
const userRouter = require('./routes/api/user');
app.use('/api/user', userRouter);

// Add routes, both API and view
app.use(routes);

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/listings", {
});

//when connected successfully
mongoose.connection.on('connected', () => {
    console.log('Established Mongoose Default Connection');
});

//when connection throws an error
mongoose.connection.on('error', err =>{
  console.log('Mongoose Default Connection Error : ' + err);
});


app.get('/', (req, res)=>{
  res.send(req.cookies);
})

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});