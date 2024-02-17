const TypeModel = require("../Model/TypeModel");

const createType = async (req, res) => {
  try {
    const saveType = await TypeModel.create(req.body);
    res.status(200).json({
      message: "Type created",
      flag: 1,
      data: saveType,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllType = async(req,res)=>{
  try{
    const Types = await TypeModel.find();
    res.status(201).json({
      message:"Type featched",
      flag:1,
      data:Types
    })
  }
  catch(error){
    res.status(500).json({
      message:"Server Error",
      flag:-1,
      data:error
    })
  }
};

const getTypeById = async(req,res)=>{
  const id = req.params.id;
  try{
    const type = await TypeModel.findById(id);
    if(type === null){
      res.status(404).json({
        message:"Type not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"Type Featched",
        flag:1,
        data:type,
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

const getSubCategoryById = async(req,res)=>{
  const id = req.params.id;
  try{
    const subcategory = await SubCategoryModel.findById(id);
    if(subcategory === null){
      res.status(404).json({
        message:"SubCategory not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"SubCategory Featched",
        flag:1,
        data:subcategory,
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

const updateType = async(req,res) =>{
  const id = req.params.id;
  const newRole = req.body;

  try{
    const updatetype = await TypeModel.findByIdAndUpdate(id,newRole);
    if(updatetype === null){
      res.status(400).json({
        message:"Type not found",
        flag:-1,
      });
    }else{
      res.status(200).json({
        message:"Type Updated Successfully...",
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

const deleteType = async(req,res) =>{
  const id = req.params.id;

  try{
    const deletetype = await TypeModel.findByIdAndDelete(id);
    if(deletetype === null){
      res.status(404).json({
        message:"Type not Found",
        flag:-1
      });
    }else{
      res.status(200).json({
        message:"Type Deleted Successfully",
        flag:1,
        data:deletetype,
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
  createType,
  getAllType,
  getTypeById,
  updateType,
  deleteType,
};