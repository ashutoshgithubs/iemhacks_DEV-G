// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
    createCourse,
    getallCourses,
    getCourseDetails,
} = require("../controllers/Course")


// Categories Controllers Import
const {
    showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

// Sections Controllers Import
const {
    createSection,
    updateSection,
    deleteSection,
} = require("../controllers/Section")

// Sub-Sections Controllers Import
const {
    createSubsection,
    updateSubsection,
    deleteSubsection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
    createRatingAndreview,
    getAverageRating,
    getAllRating,
} = require("../controllers/RatingAndReview")

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth,isInstructor,createCourse)
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection)
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubsection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubsection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubsection)
// Get all Registered Courses
router.get("/getAllCourses", getallCourses)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRatingAndreview)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)

module.exports = router