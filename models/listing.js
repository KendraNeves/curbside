const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    listing_title: { type: String, required: true },
    listing_description: { type: String, required: true },
    listing_condition: String,
    listing_location: String,
    CategoriesValue: String,
    listing_latlong: {
        lat: Number,
        lng: Number,
    },
    listing_image: String, // Base64 representation of image
    date: { type: Date, default: Date.now },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
