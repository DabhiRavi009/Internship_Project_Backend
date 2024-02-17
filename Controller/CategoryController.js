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

const getCategoryById = async(req,res)=>{
  const id = req.params.id;
  try{
    const category = await CategoryModel.findById(id);
    if(category === null){
      res.status(404).json({
        message:"Category not Found",
        flag:-1,
      })
    } else{
      res.status(200).json({
        message:"Category Featched",
        flag:1,
        data:category,
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

const updateCategory = async(req,res) =>{
  const id = req.params.id;
  const newRole = req.body;

  try{
    const updatecategory = await CategoryModel.findByIdAndUpdate(id,newRole);
    if(updatecategory === null){
      res.status(400).json({
        message:"Category not found",
        flag:-1,
      });
    }else{
      res.status(200).json({
        message:"Category Updated Successfully...",
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

const deleteCategory = async(req,res) =>{
  const id = req.params.id;

  try{
    const deletecategory = await CategoryModel.findByIdAndDelete(id);
    if(deletecategory === null){
      res.status(404).json({
        message:"Category not Found",
        flag:-1
      });
    }else{
      res.status(200).json({
        message:"Category Deleted Successfully",
        flag:1,
        data:deletecategory,
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
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};