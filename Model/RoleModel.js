const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  Name: {
    type: String,
  },
});

module.exports = mongoose.model("role", RoleSchema);
