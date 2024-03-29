const ServiceModel = require("../Model/ServiceModel");
const multer = require("multer");
const path = require("path");
const cloudinaryController = require("./CloudinaryController");
// const mailUtil = require("../Utils/Mail");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
}).single("myImage");

const fileUpload = (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        res.status(500).json({
          message: "Error in File Handling",
        });
      } else {
        if (req.file === undefined) {
          res.status(400).json({
            message: "No File is Selected",
          });
        } else {
          const result = await cloudinaryController.uploadImage(req.file.path);
          const serviceObj = {
            Service_Name: req.body.Service_Name,
            category: req.body.category,
            sub_category: req.body.sub_category,
            type: req.body.type,
            Fees: req.body.Fees,
            Area: req.body.Area,
            City: req.body.City,
            State: req.body.State,
            service_provider: req.body.service_provider,
            imageUrl: result.secure_url,
          };
          const savedService = await ServiceModel.create(serviceObj);
          // const mailRes = await mailUtil.mailSend(
          //   savedService.email,
          //   "About Service Book mail",
          //   "Your service is Post"
          // );
          res.status(200).json({
            message: "File Uploaded",
            data: savedService,
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      flag: -1,
    });
  }
};

const createService = async (req, res) => {
  try {
    const saveService = await ServiceModel.create(req.body);
    res.status(200).json({
      message: "Service created",
      flag: 1,
      data: saveService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await ServiceModel.find()
      .populate("category")
      .populate("sub_category")
      .populate("type")
      .populate("service_provider");
    res.status(201).json({
      message: "Service featched",
      flag: 1,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getServiceById = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await ServiceModel.findById(id)
      .populate("category")
      .populate("sub_category")
      .populate("type")
      .populate("service_provider");
    if (service === null) {
      res.status(404).json({
        message: "Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Service Featched",
        flag: 1,
        data: service,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const updateService = async (req, res) => {
  const id = req.params.id;
  const newRole = req.body;

  try {
    const updateservice = await ServiceModel.findByIdAndUpdate(id, newRole);
    if (updateservice === null) {
      res.status(400).json({
        message: "Service not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Service Updated Successfully...",
        flag: 1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const deleteService = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteservice = await ServiceModel.findByIdAndDelete(id);
    if (deleteservice === null) {
      res.status(404).json({
        message: "Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Service Deleted Successfully",
        flag: 1,
        data: deleteservice,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getServiceProviderByServiceID = async (req, res) => {
  const serviceProviderId = req.params.id;
  try {
    const service = await ServiceModel.find({
      service_provider: serviceProviderId,
    })
      .populate("service_provider")
      .populate("category")
      .populate("sub_category")
      .populate("type");
    if (service && service.length > 0) {
      res.status(200).json({
        message: "Service Get Successfully",
        flag: 1,
        data: service,
      });
    } else {
      res.status(400).json({
        message: "Invalid Id",
        flag: -1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const filterService = async (req, res) => {
  console.log(req.query);

  const service = await ServiceModel.find({
    Service_Name: { $regex: req.query.Service_Name, $options: "i" },
  })
    .populate("category")
    .populate("sub_category")
    .populate("type")
    .populate("service_provider");
  if (service && service.length > 0) {
    res.status(200).json({
      message: "Service Fetched Sucessfully",
      flag: 1,
      data: service,
    });
  } else {
    res.status(404).json({
      message: "No Service found",
      data: [],
    });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  fileUpload,
  getServiceProviderByServiceID,
  filterService,
};
