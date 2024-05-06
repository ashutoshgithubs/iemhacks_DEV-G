const cloudinary = require("cloudinary").v2;

exports.uploadFileToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  console.log("OPTIONS", options);
  try {
    const response = await cloudinary.uploader.upload(
      file.tempFilePath,
      options
    );
    console.log("RESPONSE OF UPLOAD PROFILE PIC: ", response);
    return response;
  } catch (error) {
    console.log("ERROR IS: ", error);
  }
};
