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

const getServiceById = async(req,res)=>{
  const id = req.params.id;
  try{
    const service = await ServiceModel.findById(id).populate("name").populate("category").populate("sub_category").populate("type")
    if(service === null){
      res.status(404).json({
        message:"Service not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"Service Featched",
        flag:1,
        data:service,
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

const updateService = async(req,res) =>{
  const id = req.params.id;
  const newRole = req.body;

  try{
    const updateservice = await ServiceModel.findByIdAndUpdate(id,newRole);
    if(updateservice === null){
      res.status(400).json({
        message:"Service not found",
        flag:-1,
      });
    }else{
      res.status(200).json({
        message:"Service Updated Successfully...",
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

const deleteService = async(req,res) =>{
  const id = req.params.id;

  try{
    const deleteservice = await ServiceModel.findByIdAndDelete(id);
    if(deleteservice === null){
      res.status(404).json({
        message:"Service not Found",
        flag:-1
      });
    }else{
      res.status(200).json({
        message:"Service Deleted Successfully",
        flag:1,
        data:deleteservice,
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
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};