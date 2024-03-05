const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  ServiceId: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  Service_Provider: {
    type: Schema.Types.ObjectId,
    ref: "Service_Provider",
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Amount: {
    type: Number,
  },
  Status: {
    type: String,
    default: "pending",
  },
});
module.exports = mongoose.model("Booking", BookSchema);
