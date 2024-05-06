const { contactUsEmail } = require("../mailTemplate/contactFormRes");
const mailSender = require("../utils/mailSender");

exports.contactFormController = async (request, response) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } =
    request.body;
  try {
    const emailResponse = await mailSender(
      email,
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
