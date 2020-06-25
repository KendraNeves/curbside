const router = require("express").Router();
const listingsController = require("../../controller/controller");

// Matches with "/api/books"
router
  .route("/")
  .get(listingsController.findAll)
  .post(listingsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(listingsController.findById)
  .put(listingsController.update)
  .delete(listingsController.remove);

module.exports = router;



