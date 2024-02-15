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

module.exports = {
  createUser,
  getAllUsers
};
