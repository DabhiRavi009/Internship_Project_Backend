const UserModel = require("../Model/UserModel");
const userModel = require("../Model/UserModel");
const encrypt = require("../Utils/Encrypt");

const createUser = async (req, res) => {
  try {
    const hashedPassword = encrypt.encryptPassword(req.body.Password);
    const userObj = {
      User_Name: req.body.User_Name,
      Password: hashedPassword,
      Email: req.body.Email,
      Contact: req.body.Contact,
      role: req.body.role,
    };
    const saveUser = await userModel.create(userObj);
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

const loginUser = async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    const userFromDb = await UserModel.findOne({
      Email: Email,
    });
    if (userFromDb != null) {
      console.log("User Found");
      const flag = encrypt.comparePassword(Password, userFromDb.Password);
      if (flag === true) {
        res.status(200).json({
          message: "User Login Successfully...",
          flag: 1,
          data: userFromDb,
        });
      } else {
        res.status(404).json({
          message: "Invalid Password",
          flag: -1,
        });
      }
    } else {
      res.status(404).json({
        message: "User Not Found",
        flag: -1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error in Login User",
      data: error,
      flag: -1,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate("role");
    res.status(201).json({
      message: "Users featched",
      flag: 1,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id).populate("role");
    if (user === null) {
      res.status(404).json({
        message: "User not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "User Featched",
        flag: 1,
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const newRole = req.body;

  try {
    const updateuser = await userModel.findByIdAndUpdate(id, newRole);
    if (updateuser === null) {
      res.status(400).json({
        message: "User not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "User Updated Successfully...",
        flag: 1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteuser = await userModel.findByIdAndDelete(id);
    if (deleteuser === null) {
      res.status(404).json({
        message: "User not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "User Deleted Successfully",
        flag: 1,
        data: deleteuser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};
