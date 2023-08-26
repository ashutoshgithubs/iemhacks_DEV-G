const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  //tag and category

  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  accountType: {
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  approved: {
    type: Boolean,
    default: true,
  },

  token: {
    type: String,
  },
  reseetPasswordExpires: {
    type: Date,
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },

  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  image: {
    type: String,
    required: true,
  },

  coursesProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CoursesProgress",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
