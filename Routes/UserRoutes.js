const router = require("express").Router();
const userController = require("../Controller/UserController");

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/user/login", userController.loginUser);
module.exports = router;
