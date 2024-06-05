require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const RoleRoutes = require("./Routes/RoleRoutes");
const userRoutes = require("./Routes/UserRoutes");
const serviceproviderRoutes = require("./Routes/ServiceProviderRoutes");
const serviceRoutes = require("./Routes/ServiceRoutes");
const SubCategoryRoutes = require("./Routes/SubCategoryRoutes");
const CategoryRoutes = require("./Routes/CategoryRoutes");
const TypeRoutes = require("./Routes/TypesRoutes");
const BookServiceRoutes = require("./Routes/BookRoutes");
const adminRoutes = require("./Routes/AdminRoutes");

mongoose.set("strictQuery", false);
app.use("/roles", RoleRoutes);
app.use("/users", userRoutes);
app.use("/serviceproviders", serviceproviderRoutes);
app.use("/services", serviceRoutes);
app.use("/subcategorys", SubCategoryRoutes);
app.use("/categorys", CategoryRoutes);
app.use("/types", TypeRoutes);
app.use("/bookservices", BookServiceRoutes);
app.use("/admins", adminRoutes);

mongoose
  // .connect("mongodb://127.0.0.1:27017/internship_localservice")
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb Connected Sucessfully..");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server running on port no " + PORT);
});
