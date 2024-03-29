const router = require("express").Router();
const adminController = require("../Controller/AdminController");

router.post("/admin", adminController.createAdmin);
router.get("/admin", adminController.getAllAdmin);
router.get("/admin/:id", adminController.getAdminById);
router.put("/admin/:id", adminController.updateAdmin);
router.delete("/admin/:id", adminController.deleteAdmin);
router.post("/admin/login", adminController.loginAdmin);
router.post("/admin/isadminexist", adminController.isAdmin);
router.post("/admin/resetpassword", adminController.resetPassword);
module.exports = router;
