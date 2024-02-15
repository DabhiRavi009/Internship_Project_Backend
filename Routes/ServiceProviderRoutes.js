const router = require("express").Router();
const ServiceProviderController = require("../Controller/ServiceProviderController");

router.post("/serviceprovider", ServiceProviderController.createServiceProvider);
router.get("/serviceprovider", ServiceProviderController.getAllServiceProviders);

module.exports = router;
