const mongoose = require("mongoose");
// const db = require("../");

mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/credentials"
);

const signup = [
{    email: "",
     password: ""
}

];

db.User
    .add({})
    .then(() => db.User.collection.insertMany(seed))
    .then(data => {
        console.log(data.result.n +v" user signed up");
    })
    .catch(error => {
        console.error(error);

    })