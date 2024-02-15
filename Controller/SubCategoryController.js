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

const getAllSubCategory = async(req,res)=>{
  try{
    const SubCategories = await SubCategoryModel.find();
    res.status(201).json({
      message:"SubCategory featched",
      flag:1,
      data:SubCategories
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
  createSubCategory,
  getAllSubCategory
};