const mongoose = require("mongoose");
require("dotenv").config();
exports.dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection established successfully");
    })
    .catch((error) => {
      console.log("Connection failed with DB!");
      console.error(error.message);
      process.exit(1);
    });
};
