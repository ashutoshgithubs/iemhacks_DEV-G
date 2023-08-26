// const { Razorpay } = require("../config/razorpay");
const User = require("../models/User");
const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const {courseEnrollmentEmail}= require("../mail/templates/courseEnrollmentEmail");
const mailSender = require("../utils/mailSender");
const { default: mongoose } = require("mongoose");

exports.capturePayment = async (req, res) => {
  const { courseid } = req.body;
  const userId = req.user.id;
  if (!courseid) {
    return res.json({
      success: false,
      message: "Please provide valid course ID",
    });
  }
  let courseDetails;
  try {
    courseDetails = await Course.findById({ _id: courseid });

    if (!courseDetails) {
      return res.json({
        success: false,
        message: "Could not find the course",
      });
    }

    const uid = new mongoose.Types.ObjectId(userId);
    if (courseDetails.studentsenrolled.includes(uid)) {
      return res.status(200).json({
        success: false,
        message: "Student is already enrolled",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  const amount = courseDetails.price;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
    notes: {
      courseId: courseid,
      userId,
    },
  };

  try {
    //initiate the payment using razorpay
    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);
    //return response
    return res.status(200).json({
      success: true,
      courseName: courseDetails.courseName,
      courseDescription: courseDetails.courseDescription,
      thumbnail: courseDetailss.thumbnail,
      orderId: paymentResponse.id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Could not initiate order",
    });
  }
};

//verify Signature of Razorpay and Server
exports.verifySignature=async(req,res)=>{
    const webhookSecret='12345678';
    const signature = req.headers["x-razorpay-signature"];
    const shasum=crypto.createHmac('sha256',webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest===signature) {
        console.log("Payment is Authorised");

        const {courseId, userId} = req.body.payload.payment.entity.notes;

        try{
                //fulfil the action

                //find the course and enroll the student in it
                const enrolledCourse = await Course.findOneAndUpdate(
                                                {_id: courseId},
                                                {$push:{studentsenrolled: userId}},
                                                {new:true},
                );

                if(!enrolledCourse) {
                    return res.status(500).json({
                        success:false,
                        message:'Course not Found',
                    });
                }

                console.log(enrolledCourse);

                //find the student andadd the course to their list enrolled courses me 
                const enrolledStudent = await User.findOneAndUpdate(
                                                {_id:userId},
                                                {$push:{courses:courseId}},
                                                {new:true},
                );

                console.log(enrolledStudent);

                //mail send krdo confirmation wala 
                const emailResponse = await mailSender(
                                        enrolledStudent.email,
                                        "Congratulations from Knowledge",
                                        courseEnrollmentEmail(enrolledCourse.courseName,enrolledStudent.firstName+enrolledStudent.lastName),
                );

                console.log(emailResponse);
                return res.status(200).json({
                    success:true,
                    message:"Signature Verified and COurse Added",
                });
            

        }       
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success:false,
                message:error.message,
            });
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:'Invalid request',
        });
    }
}
