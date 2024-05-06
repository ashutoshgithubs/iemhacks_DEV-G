const { instance } = require("../config/razorpay");
const User = require("../models/User");
const Course = require("../models/Course");
const mailSender = require("../utils/mailSender");
const mongoose = require("mongoose");
const {
  courseEnrollmentEmail,
} = require("../mailTemplate/courseEnrollmentEmail");
const { paymentSuccessEmail } = require("../mailTemplate/paymentSuccessEmail");
const crypto = require("crypto");
const CourseProgress = require("../models/CourseProgress");

//Initiate the RAZORPAY PAYMENT first
exports.capturePayment = async (request, response) => {
  console.log("REQUEST BODY: ", request.body);
  const { courses } = request.body;
  console.log("COURSES IS:", courses);

  const userId = request.user.id;

  if (courses.length === 0) {
    return response.json({
      success: false,
      message: "Please provide Course Id",
    });
  }

  let totalAmount = 0;

  for (const course_id of courses) {
    let course;
    try {
      course = await Course.findById(course_id);
      console.log("Course found thorugh for loop: ", course);
      if (!course) {
        return response
          .status(200)
          .json({ success: false, message: "Couldn't find the course" });
      }

      const uid = new mongoose.Types.ObjectId(userId);
      if (course.studentsEnrolled.includes(uid)) {
        return response
          .status(200)
          .json({ success: false, message: "Student is already Enrolled" });
      }

      totalAmount += course.price;
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ success: false, message: error.message });
    }
  }
  const currency = "INR";
  const options = {
    amount: totalAmount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
  };

  try {
    const paymentResponse = await instance.orders.create(options);
    console.log("PAYMENT RESPONSE: ", paymentResponse);
    response.json({
      success: true,
      data: paymentResponse,
    });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ success: false, mesage: "Couldn't initiate the Order" });
  }
};

//verify the payment
exports.verifyPayment = async (request, response) => {
  const razorpay_order_id = request.body?.razorpay_order_id;
  const razorpay_payment_id = request.body?.razorpay_payment_id;
  const razorpay_signature = request.body?.razorpay_signature;
  const courses = request.body?.courses;
  const userId = request.user.id;

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature ||
    !courses ||
    !userId
  ) {
    return response
      .status(200)
      .json({ success: false, message: "Payment Failed" });
  }

  let body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    //Now enroll the student in the course
    await enrollStudents(courses, userId, response);

    return response
      .status(200)
      .json({ success: true, message: "Payment Verified" });
  }
  return response
    .status(200)
    .json({ success: "false", message: "Payment Failed" });
};

exports.sendPaymentSuccessEmail = async (request, response) => {
  const { orderId, paymentId, amount } = request.body;

  const userId = request.user.id;

  if (!orderId || !paymentId || !amount || !userId) {
    return response
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }

  try {
    const enrolledStudent = await User.findById(userId);
    await mailSender(
      enrolledStudent.email,
      `Payment Recieved`,
      paymentSuccessEmail(
        `${enrolledStudent.firstName} ${enrolledStudent.lastName}`,
        amount / 100,
        orderId,
        paymentId
      )
    );
  } catch (error) {
    console.log("error in sending mail", error);
    return response
      .status(500)
      .json({ success: false, message: "Could not send payment email" });
  }
};

const enrollStudents = async (courses, userId, response) => {
  if (!courses || !userId) {
    return response.status(400).json({
      success: false,
      message: "Please userId & relevent course data",
    });
  }

  for (const courseId of courses) {
    try {
      //find the course and enroll the student in it
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );

      if (!enrolledCourse) {
        return response
          .status(500)
          .json({ success: false, message: "Course not Found" });
      }
      const courseProgress = await CourseProgress.create({
        courseID: courseId,
        userId: userId,
        completedVideos: [],
      });
      //Now enroll the course in the student section/schema
      const enrolledStudent = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            courses: courseId,
            courseProgress: courseProgress._id,
          },
        },
        { new: true }
      );
      console.log("Enrolled student: ", enrolledStudent);
      //SEND A MAIL TO STUDENT FOR SUCCESSFULLY COURSE ENROLLEMENT
      const emailResponse = await mailSender(
        enrollStudents.email,
        `Successfully Enrolled into ${enrolledCourse.courseName}`,
        courseEnrollmentEmail(
          enrolledCourse.courseName,
          `${enrolledStudent.firstName} ${enrolledStudent.lastName}`
        )
      );
      console.log(emailResponse);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ success: false, message: error.message });
    }
  }
};
