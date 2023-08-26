const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");
const { default: mongoose } = require("mongoose");

exports.createRatingAndreview = async (req, res) => {
  try {
    const UserId = req.User.id;
    const { rating, review, courseid } = req.body;
    //check is user enrolled or not
    const coursedetails = await Course.findOne({
      _id: courseid,
      studentsenrolled: { $elemMatch: { $eq: UserId } },
    });
    if (!coursedetails) {
      return res.status(404).json({
        success: false,
        message: "Student is not enrolled in the course",
      });
    }
    const alreadReviewed = await RatingAndReview.findOne({
      user: UserId,
      course: courseid,
    });
    if (alreadReviewed) {
      return res.status(403).json({
        success: false,
        message: "Course is already reviewed by the user",
      });
    }
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseid,
      user: UserId,
    });
    const updatecourseDeatils = await Course.findByIdAndUpdate(
      { _id: courseid },
      {
        $push: {
          ratingandreviews: ratingReview._id,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Rating and Review created Successfully",
      ratingReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messagee: "cant make any review and rating",
      error: error.message,
    });
  }
};

exports.getAverageRating = async (req, res) => {
  try {
    const { courseid } = req.body;
    const result = await RatingAndReview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseid),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Average Rating is 0, no ratings given till now",
      averageRating: 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllRating = async (req, res) => {
  try {
    const allreview = await RatingAndReview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();
    return res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      data: allreview,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
