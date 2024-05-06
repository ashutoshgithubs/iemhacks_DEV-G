const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");
const contactRoutes = require("./routes/Contact");

const { dbConnect } = require("./config/database");
dbConnect();
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//Routes Mounting
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactRoutes);

//Start Server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

//Default route
app.get("/", (request, response) => {
  return response.json({
    success: true,
    message: "Your server is running well",
  });
});
