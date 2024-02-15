const ServiceProviderModel = require("../Model/ServiceProviderModel");

const createServiceProvider = async (req, res) => {
  try {
    const saveServiceProvider = await ServiceProviderModel.create(req.body);
    res.status(200).json({
      message: "Service provider created",
      flag: 1,
      data: saveServiceProvider,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllServiceProviders = async(req,res)=>{
  try{
    const serviceProviders = await ServiceProviderModel.find().populate("user");
    res.status(201).json({
      message:"Service Providers featched",
      flag:1,
      data:serviceProviders
    })
  }
  catch(error){
    res.status(500).json({
      message:"Server Error",
      flag:-1,
      data:error
    })
  }
}

module.exports = {
  createServiceProvider,
  getAllServiceProviders
};