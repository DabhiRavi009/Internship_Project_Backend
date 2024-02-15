const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
  Name: {
    type: String,
    maxlength: 30,
    required: true,
  },
});

module.exports = mongoose.model("Sub_Category", SubCategorySchema);
