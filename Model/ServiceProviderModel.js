const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceProviderSchema = new Schema({
  Name: {
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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Service_Provider", ServiceProviderSchema);
