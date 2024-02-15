const router = require("express").Router();
const userController = require("../Controller/UserController");

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);

module.exports = router;
