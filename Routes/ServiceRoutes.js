const router = require("express").Router();
const ServiceController = require("../Controller/ServiceController");

router.post("/services", ServiceController.createService);
router.post("/service", ServiceController.fileUpload);
router.get("/service", ServiceController.getAllServices);
router.get("/service/:id", ServiceController.getServiceById);
router.put("/service/:id", ServiceController.updateService);
router.delete("/service/:id", ServiceController.deleteService);
router.get(
  "/serviceproviderbyserviceid/:id",
  ServiceController.getServiceProviderByServiceID
);

module.exports = router;
