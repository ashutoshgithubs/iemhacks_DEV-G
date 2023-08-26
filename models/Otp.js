const mongoose=require('mongoose');
const mailSender = require('../utils/mailSender');
const emailTemplate=require('../mail/templates/emailVerificationTemplate')
const otpschema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
    type:Date,
    default:Date.now,
    expires:5*60*60,
    }
})

async function sendVerificationOTP(email,otp){
    try {
        const mailResponse=await mailSender(email,"Verification From StudyNotion",emailTemplate(otp))
        console.log('email send succcessfully',mailResponse.response)

    } catch (error) {
        console.log("error while sending the verification code",error)
    }
}

otpschema.pre('save',async function(next){

    if (this.isNew) {
        await sendVerificationOTP(this.email,this.otp)
    }
    next()
})

module.exports=mongoose.model("OTP",otpschema)