const RoleModel = require("../Model/RoleModel");

const createRole = async (req, res) => {
  try {
    const saveRole = await RoleModel.create(req.body);
    res.status(201).json({
      message: "Roled Created",
      flag: 1,
      data: saveRole,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};


const getAllRoles = async(req,res)=>{
  try{
    const roles = await RoleModel.find();
    res.status(201).json({
      message:"Roles featched",
      flag:1,
      data:roles
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
  createRole,
  getAllRoles,
};
