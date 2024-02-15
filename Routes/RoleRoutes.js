const router = require("express").Router();
const RoleController = require("../Controller/RoleController");

router.post("/role", RoleController.createRole);
router.get("/role", RoleController.getAllRoles);

module.exports = router;
