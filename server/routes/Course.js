const express = require("express");
const router = express.Router();

// Import Course Controllers
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  editCourse,
  getFullCourseDetails,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Courses");

//Import Category controllers
const {
  createCategory,
  showAllCategory,
  categoryPageDetails,
} = require("../controllers/Category");

//Import section controllers
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

//Imports sunSection controllers
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/SubSection");

//Imports RatingAndReview controllers
const {
  createRatingAndReview,
  getAverageRating,
  getAllRatingAndReviews,
} = require("../controllers/RatingAndReview");

//Import middlewares
const {
  auth,
  isStudent,
  isAdmin,
  isInstructor,
} = require("../middlewares/auth");

//Import Course progress
const { updateCourseProgress } = require("../controllers/courseProgress");

//Course Routes
router.post("/createCourse", auth, isInstructor, createCourse);
router.post("/editCourse", auth, isInstructor, editCourse);
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
router.delete("/deleteCourse", deleteCourse);
router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);

router.get("/getAllCourses", getAllCourses);
router.post("/getCourseDetails", getCourseDetails);

//Category routes
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategory", showAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);

//Rating & Review Routes
router.post("/createRating", auth, isStudent, createRatingAndReview);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRatingAndReviews);

// To Update Course Progress
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

module.exports = router;
