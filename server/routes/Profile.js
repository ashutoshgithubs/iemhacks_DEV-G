const express = require("express");
const router = express.Router();
const { auth, isInstructor } = require("../middlewares/auth");
const {
  updateProfile,
  deleteAccount,
  getUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
  removeProfilePicture
} = require("../controllers/Profile");

router.put("/updateProfile", auth, updateProfile);
router.delete("/deleteAccount", auth, deleteAccount);
router.get("/getUserDetails", auth, getUserDetails);
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard);
router.put("/removeProfilePicture", auth, removeProfilePicture);

module.exports = router;
