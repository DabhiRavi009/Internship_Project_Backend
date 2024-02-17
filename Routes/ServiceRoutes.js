const router = require("express").Router();
const ServiceController = require("../Controller/ServiceController");

router.post("/service", ServiceController.createService);
router.get("/service", ServiceController.getAllServices);
router.get("/service/:id", ServiceController.getServiceById);
router.put("/service/:id", ServiceController.updateService);
router.delete("/service/:id", ServiceController.deleteService);

module.exports = router;
