const router = require("express").Router();
const listingsController = require("../../controller/controller");

router
  .route("/")
  .get(listingsController.findAll)
  .post(listingsController.create);

router
  .route("/:id")
  .get(listingsController.findById)
  .put(listingsController.update)
  .delete(listingsController.remove);

module.exports = router;



