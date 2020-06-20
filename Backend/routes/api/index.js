const router = require("express").Router();
const listingRoutes = require("./listings");


router.use("/listings", listingRoutes);

module.exports = router;