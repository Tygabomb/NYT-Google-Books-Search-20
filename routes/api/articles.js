const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// For routes with /api/articles 
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// For routes with /api/articles/:id
router.route("/:id")
  .get(articleController.findById)
  .delete(articleController.remove);

module.exports = router;