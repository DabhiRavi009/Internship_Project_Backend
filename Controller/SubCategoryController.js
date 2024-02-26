const SubCategoryModel = require("../Model/SubCategoryModel");

const createSubCategory = async (req, res) => {
  try {
    const saveSubCategory = await SubCategoryModel.create(req.body);
    res.status(200).json({
      message: "Subcategory created",
      flag: 1,
      data: saveSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllSubCategory = async (req, res) => {
  try {
    const SubCategories = await SubCategoryModel.find().populate("category");
    res.status(201).json({
      message: "SubCategory featched",
      flag: 1,
      data: SubCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getSubCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const subcategory = await SubCategoryModel.findById(id).populate(
      "category"
    );
    if (subcategory === null) {
      res.status(404).json({
        message: "SubCategory not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "SubCategory Featched",
        flag: 1,
        data: subcategory,
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

const updateSubCategory = async (req, res) => {
  const id = req.params.id;
  const newRole = req.body;

  try {
    const updatesubcategory = await SubCategoryModel.findByIdAndUpdate(
      id,
      newRole
    );
    if (updatesubcategory === null) {
      res.status(400).json({
        message: "SubCategory not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "SubCategory Updated Successfully...",
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

const deleteSubCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const deletesubcategory = await SubCategoryModel.findByIdAndDelete(id);
    if (deletesubcategory === null) {
      res.status(404).json({
        message: "SubCategory not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "SubCategory Deleted Successfully",
        flag: 1,
        data: deletesubcategory,
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
  createSubCategory,
  getAllSubCategory,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
};
