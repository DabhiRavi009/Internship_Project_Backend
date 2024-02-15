const CategoryModel = require("../Model/CategoryModel");

const createCategory = async (req, res) => {
  try {
    const saveCategory = await CategoryModel.create(req.body);
    res.status(200).json({
      message: "Category created",
      flag: 1,
      data: saveCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllCategory = async(req,res)=>{
  try{
    const Categories = await CategoryModel.find();
    res.status(201).json({
      message:"Category featched",
      flag:1,
      data:Categories
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
  createCategory,
  getAllCategory
};