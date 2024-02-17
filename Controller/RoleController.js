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
};

const getRoleById = async(req,res)=>{
  const id = req.params.id;
  try{
    const role = await RoleModel.findById(id);
    if(role === null){
      res.status(404).json({
        message:"Role not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"Role Featched",
        flag:1,
        data:role,
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

const updateRole = async(req,res) =>{
  const id = req.params.id;
  const newRole = req.body;

  try{
    const updaterole = await RoleModel.findByIdAndUpdate(id,newRole);
    if(updaterole === null){
      res.status(400).json({
        message:"Role not found",
        flag:-1,
      });
    }else{
      res.status(200).json({
        message:"Role Updated Successfully...",
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

const deleteRole = async(req,res) =>{
  const id = req.params.id;

  try{
    const deleterole = await RoleModel.findByIdAndDelete(id);
    if(deleterole === null){
      res.status(404).json({
        message:"Role not Found",
        flag:-1
      });
    }else{
      res.status(200).json({
        message:"Role Deleted Successfully",
        flag:1,
        data:deleterole,
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
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
};
