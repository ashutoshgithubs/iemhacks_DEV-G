const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mailTemplate/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from DEV-G",
      emailTemplate(otp)
    );
    console.log("Email sent Successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occured while sending e-mail: ", error);
    throw error;
  }
}

otpSchema.pre("save", async function (next) {
  //this.isNew checks whether the user is new.
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

module.exports = mongoose.model("OTP", otpSchema);
