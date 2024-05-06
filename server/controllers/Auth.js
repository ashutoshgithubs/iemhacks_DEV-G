const OTP = require("../models/OTP");
const User = require("../models/User");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { passwordUpdated } = require("../mailTemplate/passwordUpdate");
const mailSender = require("../utils/mailSender");

exports.sendOTP = async (request, response) => {
  try {
    //Fetch email from request's body
    const { email } = request.body;
    //Verify
    const checkUserPresence = await User.findOne({ email });
    if (checkUserPresence) {
      return response.status(401).json({
        success: false,
        message: "User is already registered.",
      });
    }
    //Generate OTP
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP: ", otp);

    //Check OTP uniqueness

    let result = await OTP.findOne({ otp: otp });

    while (result) {
      //It means otp isn't unique.So, keep generating OTP
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    //Let's crate a DB entry
    const OtpEntry = { email, otp };
    const otpBody = await OTP.create(OtpEntry);
    console.log("OTP Body", otpBody);

    return response.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
      otp,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Sign Up
exports.signUp = async (request, response) => {
  try {
    // Fetch required data from request body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = request.body;
    //validate
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return response.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    //match password & confirm password
    if (password !== confirmPassword) {
      return response.status(400).json({
        success: false,
        message: "Password & confirm Password must be same. Please check once.",
      });
    }
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }
    // find most recent otp
    const recentOtp = await OTP.findOne({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    //validate recent otp
    if (recentOtp.length === 0) {
      return response.status(400).json({
        success: false,
        message: "OTP Not Found!",
      });
    }
    if (otp !== recentOtp.otp) {
      return response.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }
    //Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user
    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    //create DB entry
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumer: null,
    });
    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      approved: approved,
      accountType,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });
    return response.status(200).json({
      success: true,
      message: "User registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "User can't be registered, please try again",
    });
  }
};

//Login
exports.login = async (request, response) => {
  try {
    //Fetch email & password from request body
    const { email, password } = request.body;
    //Validate
    if (!email || !password) {
      return response.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    //check existing user
    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return response.status(401).json({
        success: false,
        message: "User isn't registered, please sign up first.",
      });
    }
    //compare entered password
    if (await bcrypt.compare(password, user.password)) {
      //Generate JWT token

      const token = jwt.sign(
        { email: user.email, id: user._id, accountType: user.accountType },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      console.log("Token after login: ", token);
      // Save token to user document in database
      user.token = token;
      user.password = undefined;
      //Create cookie & send response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      response.cookie("token", token, options).status(200).json({
        success: true,
        message: "Logged in successfully",
        user,
        token,
      });
    } else {
      return response.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "Login failed, please try again",
    });
  }
};

// Controller for Changing Password
exports.changePassword = async (req, res) => {
  try {
    // Get user data from req.user
    const userDetails = await User.findById(req.user.id);
    console.log("change Password userDetails: ", userDetails);

    // Get old password, new password, and confirm new password from req.body
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    console.log(
      "Old password, NewPassword, confirmPassword",
      oldPassword,
      newPassword,
      confirmNewPassword
    );

    // Validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );
    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" });
    }

    // Match new password and confirm new password
    if (newPassword !== confirmNewPassword) {
      // If new password and confirm new password do not match, return a 400 (Bad Request) error
      return res.status(400).json({
        success: false,
        message: "The password and confirm password does not match",
      });
    }

    // Update password
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    );
    console.log(
      "UpdatedUserDetails in password change auth: ",
      updatedUserDetails
    );

    // Send notification email
    try {
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        "Password for your account has been updated",
        passwordUpdated(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      );
      console.log("Email sent successfully:", emailResponse.response);
    } catch (error) {
      // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
      console.error("Error occurred while sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      });
    }

    // Return success response
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
    console.error("Error occurred while updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
};
