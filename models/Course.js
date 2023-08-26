const mongoose = require("mongoose");
const courseschema = new mongoose.Schema({
  courseName: {
    type: String,
  },
  coursedescripttion: {
    type: String,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  whatyouwilllearn: {
    type: String,
  },
  coursecontent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingandreviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  price: {
    type: Number,
  },
  thumnail: {
    type: String,
  },
  tag: {
    type: [String],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  studentsenrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  instructions: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
  },
});

module.exports = mongoose.model("Course", courseschema);
