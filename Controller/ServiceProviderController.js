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

const getServiceProviderById = async(req,res)=>{
  const id = req.params.id;
  try{
    const serviceProvider = await ServiceProviderModel.findById(id).populate("user");
    if(serviceProvider === null){
      res.status(404).json({
        message:"Service Provider not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"Service Provider Featched",
        flag:1,
        data:serviceProvider,
      })
    }
  }catch(error){
    res.status(500).json({
      message:"Server Error",
      flag:-1,
      data:error,
    })
  }
}

const updateServiceProvider = async(req,res) =>{
  const id = req.params.id;
  const newRole = req.body;

  try{
    const updateserviceprovider = await ServiceProviderModel.findByIdAndUpdate(id,newRole);
    if(updateserviceprovider === null){
      res.status(400).json({
        message:"Service Provider not found",
        flag:-1,
      });
    }else{
      res.status(200).json({
        message:"Service Provider Updated Successfully...",
        flag:1,
      })
    }
  }catch(error){
    res.status(500).json({
      message:"Server Error",
      flag:-1,
      data:error,
    })
  }
}

const deleteServiceProvider = async(req,res) =>{
  const id = req.params.id;

  try{
    const deleteserviceprovider = await ServiceProviderModel.findByIdAndDelete(id);
    if(deleteserviceprovider === null){
      res.status(404).json({
        message:"Service Provider not Found",
        flag:-1
      });
    }else{
      res.status(200).json({
        message:"Service Provider Deleted Successfully",
        flag:1,
        data:deleteserviceprovider,
      })
    }
  }catch(error){
    res.status(500).json({
      message:"Server Error",
      flag:-1,
      data:error,
    })
  }
}

module.exports = {
  createServiceProvider,
  getAllServiceProviders,
  getServiceProviderById,
  updateServiceProvider,
  deleteServiceProvider,
};