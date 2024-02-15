const router = require("express").Router();
const SubCategoryController = require("../Controller/SubCategoryController");

router.post("/subcategory", SubCategoryController.createSubCategory);
router.get("/subcategory", SubCategoryController.getAllSubCategory);

module.exports = router;
