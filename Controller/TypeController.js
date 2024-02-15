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
}
module.exports = {
  createType,
  getAllType
};