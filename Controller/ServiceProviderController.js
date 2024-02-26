const ServiceProviderModel = require("../Model/ServiceProviderModel");
const encrypt = require("../Utils/Encrypt");

const createServiceProvider = async (req, res) => {
  try {
    const hashedPassword = encrypt.encryptPassword(req.body.Password);
    const serviceProviderObj = {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: hashedPassword,
      Contact: req.body.Contact,
      user: req.body.user,
    };
    const savedServiceProvider = await ServiceProviderModel.create(
      serviceProviderObj
    );
    res.status(200).json({
      message: "Service provider created",
      flag: 1,
      data: savedServiceProvider,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const loginServiceProvider = async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    const serviceProviderFromDb = await ServiceProviderModel.findOne({
      Email: Email,
    });
    if (serviceProviderFromDb != null) {
      console.log("Service Provider Found");
      const flag = encrypt.comparePassword(
        Password,
        serviceProviderFromDb.Password
      );
      if (flag === true) {
        res.status(200).json({
          message: "Service Provider Login Successfully...",
          flag: 1,
          data: serviceProviderFromDb,
        });
      } else {
        res.status(404).json({
          message: "Invalid Password",
          flag: -1,
        });
      }
    } else {
      res.status(404).json({
        message: "Service Provider Not Found",
        flag: -1,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Error in Login Service Provider",
      data: error,
      flag: -1,
    });
  }
};

const getAllServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProviderModel.find().populate("role");
    res.status(201).json({
      message: "Service Providers featched",
      flag: 1,
      data: serviceProviders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getServiceProviderById = async (req, res) => {
  const id = req.params.id;
  try {
    const serviceProvider = await ServiceProviderModel.findById(id).populate(
      "role"
    );
    if (serviceProvider === null) {
      res.status(404).json({
        message: "Service Provider not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Service Provider Featched",
        flag: 1,
        data: serviceProvider,
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

const updateServiceProvider = async (req, res) => {
  const id = req.params.id;
  const newRole = req.body;

  try {
    const updateserviceprovider = await ServiceProviderModel.findByIdAndUpdate(
      id,
      newRole
    );
    if (updateserviceprovider === null) {
      res.status(400).json({
        message: "Service Provider not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Service Provider Updated Successfully...",
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

const deleteServiceProvider = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteserviceprovider = await ServiceProviderModel.findByIdAndDelete(
      id
    );
    if (deleteserviceprovider === null) {
      res.status(404).json({
        message: "Service Provider not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Service Provider Deleted Successfully",
        flag: 1,
        data: deleteserviceprovider,
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

module.exports = {
  createServiceProvider,
  getAllServiceProviders,
  getServiceProviderById,
  updateServiceProvider,
  deleteServiceProvider,
  loginServiceProvider,
};
