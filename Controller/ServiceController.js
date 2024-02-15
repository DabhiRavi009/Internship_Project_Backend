const ServiceModel = require("../Model/ServiceModel");

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

const getAllServices = async(req,res)=>{
  try{
    const services = await ServiceModel.find().populate("name").populate("category").populate("sub_category").populate("type")
    res.status(201).json({
      message:"Service featched",
      flag:1,
      data:services
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
  createService,
  getAllServices
};