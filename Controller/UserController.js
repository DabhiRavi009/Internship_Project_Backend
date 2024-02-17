const userModel = require("../Model/UserModel");

const createUser = async (req, res) => {
  try {
    const saveUser = await userModel.create(req.body);
    res.status(200).json({
      message: "User created",
      flag: 1,
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllUsers = async(req,res)=>{
  try{
    const users = await userModel.find().populate("role");
    res.status(201).json({
      message:"Users featched",
      flag:1,
      data:users
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

const getUserById = async(req,res)=>{
  const id = req.params.id;
  try{
    const user = await userModel.findById(id).populate("role");
    if(user === null){
      res.status(404).json({
        message:"User not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"User Featched",
        flag:1,
        data:user,
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


const updateUser = async(req,res) =>{
  const id = req.params.id;
  const newRole = req.body;

  try{
    const updateuser = await userModel.findByIdAndUpdate(id,newRole);
    if(updateuser === null){
      res.status(400).json({
        message:"User not found",
        flag:-1,
      });
    }else{
      res.status(200).json({
        message:"User Updated Successfully...",
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

const deleteUser = async(req,res) =>{
  const id = req.params.id;

  try{
    const deleteuser = await userModel.findByIdAndDelete(id);
    if(deleteuser === null){
      res.status(404).json({
        message:"User not Found",
        flag:-1
      });
    }else{
      res.status(200).json({
        message:"User Deleted Successfully",
        flag:1,
        data:deleteuser,
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
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
