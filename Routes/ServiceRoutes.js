const router = require("express").Router();
const ServiceController = require("../Controller/ServiceController");

router.post("/service", ServiceController.createService);
router.get("/service", ServiceController.getAllServices);


module.exports = router;
