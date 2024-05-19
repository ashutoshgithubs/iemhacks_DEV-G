const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (request, response) => {
  try {
    //Fetch email from request body
    const { email } = request.body;
    //Verify user
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(401).json({
        success: false,
        message: "This email isn't registered",
      });
    }
    //Generate Token
    const token = crypto.randomBytes(20).toString("hex");
    //Update user model with token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 20 * 60 * 1000,
      },
      { new: true }
    );
    //Create an Url
    const url = `https://edtech-dev-g-frontend.vercel.app/update-password/${token}`;
    //Send a mail
    await mailSender(email, "Reset Password Link", `Link: ${url}`);
    //return response
    return response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "Something went wrong while sending mail to reset password",
    });
  }
};

//Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Does not Match",
      });
    }
    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      });
    }
    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    );
    res.json({
      success: true,
      message: `Password Reset Successful`,
    });
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    });
  }
};
