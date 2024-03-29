const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Contact: {
    type: Number,
    required: true,
    unique: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "role",
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
