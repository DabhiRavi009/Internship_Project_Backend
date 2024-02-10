const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 4000;

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/LocalService")
  .then(() => {
    console.log("Mongodb Connected Sucessfully..");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server running on port no " + PORT);
});
