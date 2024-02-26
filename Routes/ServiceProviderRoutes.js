const router = require("express").Router();
const ServiceProviderController = require("../Controller/ServiceProviderController");

router.post(
  "/serviceprovider",
  ServiceProviderController.createServiceProvider
);
router.get(
  "/serviceprovider",
  ServiceProviderController.getAllServiceProviders
);
router.get(
  "/serviceprovider/:id",
  ServiceProviderController.getServiceProviderById
);
router.put(
  "/serviceprovider/:id",
  ServiceProviderController.updateServiceProvider
);
router.delete(
  "/serviceprovider/:id",
  ServiceProviderController.deleteServiceProvider
);
router.post(
  "/serviceprovider/login",
  ServiceProviderController.loginServiceProvider
);
module.exports = router;
