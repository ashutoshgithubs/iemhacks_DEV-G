const RatingAndReview = require("../models/ReviewAndRating");
const Course = require("../models/Course");
const mongoose = require("mongoose");

//Create Rating & Review
exports.createRatingAndReview = async (request, response) => {
  try {
    //Get User's id
    const userId = request.user.id;
    //Fetch required data
    const { rating, review, courseId } = request.body;
    //Check whether the user is already enrolled or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });
    if (!courseDetails) {
      return response.status(404).json({
        success: false,
        message: "Student is not enrolled in this course",
      });
    }
    //Check whether the course is already reviewed by the user or not
    const reviewedCourseStatus = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });
    if (reviewedCourseStatus) {
      return response.status(403).json({
        success: false,
        message: "Course is already reviewed by the user",
      });
    }
    //Create rating & review
    const ratingAndReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });
    // Update the course
    await Course.findByIdAndUpdate(courseId, {
      $push: {
        reviewAndRating: ratingAndReview,
      },
    });
    await courseDetails.save();
    // console.log(
    //   "Printing updated course after rating & review: ",
    //   updatedCourse
    // );
    //Return response
    return response.status(200).json({
      success: true,
      message: "Rating & Review created successfully",
      ratingAndReview,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get average rating
exports.getAverageRating = async (request, response) => {
  try {
    //Get Course Id
    const courseId = request.body.courseId;
    //Calculate average rating
    const result = await RatingAndReview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    //Return response

    if (result.length > 0) {
      return response.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }

    // If no ratings are found, return 0 as the default rating
    return response.status(200).json({ success: true, averageRating: 0 });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "Failed to retrieve the rating for the course",
      error: error.message,
    });
  }
};

//Get All rating & Reviews
exports.getAllRatingAndReviews = async (request, response) => {
  try {
    const allRatingAndReviewsData = await RatingAndReview.find({})
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
    console.log(
      "All rating and reviews of the course: ",
      allRatingAndReviewsData
    );
    return response.status(200).json({
      success: true,
      message: "All Ratings andd Reviews fetched successfully",
      data: allRatingAndReviewsData,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "Failed to retrieve the all rating and review for the course",
      error: error.message,
    });
  }
};
