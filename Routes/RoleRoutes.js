const router = require("express").Router();
const RoleController = require("../Controller/RoleController");

router.post("/role", RoleController.createRole);
router.get("/role", RoleController.getAllRoles);
router.get("/role/:id", RoleController.getRoleById);
router.put("/role/:id", RoleController.updateRole);
router.delete("/role/:id", RoleController.deleteRole);

module.exports = router;
