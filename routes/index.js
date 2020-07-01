const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../build/index.html")); //   ../client/build/index.html
  next();
});

module.exports = router;
