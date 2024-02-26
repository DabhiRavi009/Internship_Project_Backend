const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  Name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Role", RoleSchema);
