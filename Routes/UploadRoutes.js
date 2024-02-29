const router = require("express").Router();
const uploadController = require("../Controller/UploadController");
router.post("/upload", uploadController.fileUpload);

module.exports = router;
