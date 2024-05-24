const { contactUsEmail } = require("../mailTemplate/contactFormRes");
const mailSender = require("../utils/mailSender");
exports.complain = async (request, response) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } =
    request.body;
     // ZeroBounce API key
  const ZEROBOUNCE_API_KEY = process.env.ZEROBOUNCE_API_KEY;
  const verifyEmailUrl = `https://api.zerobounce.net/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${email}`;

  try {
    // Verify email using ZeroBounce with fetch API
    const verifyResponse = await fetch(verifyEmailUrl);
    const verifyData = await verifyResponse.json();
    const { status } = verifyData;

    if (status !== "valid") {
      return response.json({
        success: false,
        message: "Invalid or non-existent email address",
      });
    }
    const emailResponse = await mailSender(
      "devgsuccess@gmail.com",
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    );
    console.log("Email Response ", emailResponse);
    return response.json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return response.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};