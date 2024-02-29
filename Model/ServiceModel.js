const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  Service_Name: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  sub_category: {
    type: Schema.Types.ObjectId,
    ref: "Sub_Category",
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "Type",
  },
  Fees: {
    type: Number,
  },
  Area: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  service_provider: {
    type: Schema.Types.ObjectId,
    ref: "Service_Provider",
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Service", ServiceSchema);
