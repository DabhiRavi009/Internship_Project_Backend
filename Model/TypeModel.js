const mongoose = require("mongoose");
const Schema = new Schema();

const TypeSchema = new Schema({
  Name: {
    type: String,
    maxlength: 30,
    required: true,
  },
});

module.exports = mongoose.model("Type", TypeSchema);
