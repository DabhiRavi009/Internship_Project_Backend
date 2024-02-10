const mongoose = require("mongoose");
const Schema = new Schema();

const SubCategorySchema = new Schema({
  Name: {
    type: String,
    maxlength: 30,
    required: true,
  },
});

module.exports = mongoose.model("Sub_Category", SubCategorySchema);
