const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  ServiceId: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  service_provider: {
    type: Schema.Types.ObjectId,
    ref: "Service_Provider",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Fees: {
    type: Number,
  },
  Status: {
    type: String,
    default: "pending",
  },
});
module.exports = mongoose.model("Booking", BookSchema);
