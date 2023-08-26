const express=require('express')
const router=express.Router();

const {capturePayment,verifySignature}=require('../controllers/Razorpay')
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")

router.post('captruePayment',auth,isStudent,capturePayment);
router.post('verifySignautre',verifySignature)

module.exports=router