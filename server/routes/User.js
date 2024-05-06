const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
  login,
  signUp,
  sendOTP,
  changePassword,
} = require("../controllers/Auth");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { auth } = require("../middlewares/auth");

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/signUp", signUp);

// Route for sending OTP to the user's email
router.post("/sendOTP", sendOTP);

// Route for Changing the password
router.post("/changepassword", auth, changePassword);

//   *******  Reset Password ********

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

module.exports = router;
