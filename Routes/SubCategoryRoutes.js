const router = require("express").Router();
const SubCategoryController = require("../Controller/SubCategoryController");

router.post("/subcategory", SubCategoryController.createSubCategory);
router.get("/subcategory", SubCategoryController.getAllSubCategory);
router.get("/subcategory/:id", SubCategoryController.getSubCategoryById);
router.put("/subcategory/:id", SubCategoryController.updateSubCategory);
router.delete("/subcategory/:id", SubCategoryController.deleteSubCategory);

module.exports = router;
