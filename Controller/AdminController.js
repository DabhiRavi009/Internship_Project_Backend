const adminModel = require("../Model/AdminModel");
const encrypt = require("../Utils/Encrypt");

const createAdmin = async (req, res) => {
  try {
    const hashedPassword = encrypt.encryptPassword(req.body.Password);
    const adminObj = {
      Name: req.body.Name,
      Password: hashedPassword,
      Email: req.body.Email,
      Contact: req.body.Contact,
      role: req.body.role,
    };
    const saveAdmin = await adminModel.create(adminObj);
    res.status(200).json({
      message: "Admin created",
      flag: 1,
      data: saveAdmin,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      flag: -1,
      // data: error,
    });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    const adminFromDb = await adminModel.findOne({
      Email: Email,
    });
    if (adminFromDb != null) {
      console.log("Admin Found");
      const flag = encrypt.comparePassword(Password, adminFromDb.Password);
      if (flag === true) {
        res.status(200).json({
          message: "Admin Login Successfully...",
          flag: 1,
          data: adminFromDb,
        });
      } else {
        res.status(404).json({
          message: "Invalid Password",
          flag: -1,
        });
      }
    } else {
      res.status(404).json({
        message: "Admin Not Found",
        flag: -1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "server Error",
      data: error,
      flag: -1,
    });
  }
};

const getAllAdmin = async (req, res) => {
  try {
    const admins = await adminModel.find().populate("role");
    res.status(200).json({
      message: "Admins featched",
      flag: 1,
      data: admins,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      flag: -1,
      data: error,
    });
  }
};

const getAdminById = async (req, res) => {
  const id = req.params.id;
  try {
    const admin = await adminModel.findById(id).populate("role");
    if (admin === null) {
      res.status(404).json({
        message: "Admin not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Admin Featched",
        flag: 1,
        data: admin,
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

const updateAdmin = async (req, res) => {
  const id = req.params.id;
  const newRole = req.body;
  try {
    const updateAdmin = await adminModel.findByIdAndUpdate(id, newRole);
    if (updateAdmin === null) {
      res.status(400).json({
        message: "Admin not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Admin Updated Successfully...",
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

const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteAdmin = await adminModel.findByIdAndDelete(id);
    if (deleteAdmin === null) {
      res.status(404).json({
        message: "Admin not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Admin Deleted Successfully",
        flag: 1,
        data: deleteAdmin,
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

const isAdmin = async (req, res) => {
  const Email = req.body.Email;
  try {
    const getAdminByEmail = await adminModel.findOne({
      Email: Email,
    });
    if (getAdminByEmail) {
      res.status(200).json({
        message: "Admin Found",
        flag: 1,
        data: getAdminByEmail,
      });
    } else {
      res.status(404).json({
        message: "Admin Not Found",
        flag: -1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      flag: -1,
    });
  }
};

const resetPassword = async (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;

  console.log(Email);
  console.log(Password);

  const hashedPassword = await encrypt.encryptPassword(Password);
  try {
    const updateAdmin = await adminModel.findOneAndUpdate(
      { Email: Email },
      { $set: { Password: hashedPassword } }
    );
    res.status(200).json({
      message: "Password updated sucessfully",
      flag: 1,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in updating password",
    });
  }
};
module.exports = {
  createAdmin,
  getAllAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
  isAdmin,
  resetPassword,
};
