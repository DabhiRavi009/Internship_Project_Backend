const router = require("express").Router();
const TypeController = require("../Controller/TypeController");

router.post("/type", TypeController.createType);
router.get("/type", TypeController.getAllType);

module.exports = router;
