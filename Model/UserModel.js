const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  User_Name: {
    type: String,
    maxlength: 30,
    required: true,
  },
  Password: {
    type: String,
    maxlength: 20,
    required: true,
  },
  Email: {
    type: String,
    maxlength: 30,
    required: true,
    unique: true,
  },
  Contact: {
    type: Number,
    maxlength: 10,
    required: true,
    unique: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
});

module.exports = mongoose.model("User", UserSchema);
