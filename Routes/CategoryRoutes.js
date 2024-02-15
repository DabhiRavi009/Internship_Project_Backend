const router = require("express").Router();
const CategoryController = require("../Controller/CategoryController");

router.post("/category", CategoryController.createCategory);
router.get("/category", CategoryController.getAllCategory);

module.exports = router;
