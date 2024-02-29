const cloudinary = require("cloudinary").v2;

const uploadImage = async (file) => {
  cloudinary.config({
    cloud_name: "dvrhxlayc",
    api_key: "678816237892747",
    api_secret: "DN8WcRCeNJCQU51H4VLKIN9gnEk",
  });

  const result = await cloudinary.uploader.upload(file);
  return result;
};

module.exports = {
  uploadImage,
};
