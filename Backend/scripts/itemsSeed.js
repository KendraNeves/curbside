const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/listings"
);

const itemsSeed = [
  {
    listing_title:  "coffee table",
    listing_description:  "used glass coffee table. some scratches",
    listing_condition: "used", 
    listing_location: "Baltimore, MD",
    date: new Date(Date.now())
  },
  {
    listing_title: "Office Desk",
    listing_description:  "Barely used white office desk with drawer",
    listing_condition: "Almost New", 
    listing_location: "Baltimore, MD",
    date: new Date(Date.now())
  },
  {
    listing_title:  "14-inch flat-screen television",
    listing_description:  "super used, non-working television for parts",
    listing_condition: "used", 
    listing_location: "Baltimore, MD",
    date: new Date(Date.now())
  },
  {
    listing_title:  "men's sweaters",
    listing_description:  "a collection of gently used men's sweaters",
    listing_condition: "almost new", 
    listing_location: "Baltimore, MD",
    date: new Date(Date.now())
  }
];

db.Listing
  .remove({})
  .then(() => db.Listing.collection.insertMany(itemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
