const mongoose = require('mongoose');
const URI = require('../config/index');

mongoose.connect(process.env.MONGODB_URI || URI);

//when connected successfully
mongoose.connection.on('connected', () => {
    console.log('Established Mongoose Default Connection');
});

//when connection throws an error
mongoose.connection.on('error', err =>{
  console.log('Mongoose Default Connection Error : ' + err);
});