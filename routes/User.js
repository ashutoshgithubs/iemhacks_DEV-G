const express=require('express');
const router=express.Router();


const {signup,login,sendOtp,changePassword}=require('../controllers/Auth');
const {resetPasswordToken,resetpassword}=require('../controllers/Resetpassword');

const {auth}=require('../middlewares/auth');


// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

router.post('/login',login)
router.post('/signup',signup)
router.post('/sendotp',sendOtp)
router.post('/changepasssword',auth,changePassword)


// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token


router.post('/reset-password-token',resetPasswordToken)
router.post('/reset-password',resetpassword)

module.exports=router
