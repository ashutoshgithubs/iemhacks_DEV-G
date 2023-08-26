const User=require('../models/User');
const Otp=require('../models/Otp')
const Otpgenerator=require('otp-generator')
const bcrypt=require('bcrypt');
const Profile = require('../models/Profile');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt=require('jsonwebtoken')
// const schedule=require('node-schedule')
const {passwordUpdated}=require('../mail/templates/passwordUpdate')
require('dotenv').config()



// signup

exports.signup=async (req,res)=>{
  try {
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp,

    }=req.body

    if (!firstName ||
         !lastName || 
         !otp      ||
        !password  || 
        !confirmPassword || 
        !email) {
        return res.status(403).json({
            success:false,
            message:"All fieldd must be filled"
        })
    }


    if (password !== confirmPassword) {
        return res.status(400).json({
            success:false,
            message:"Password and confirm password is not matching"
        })
    }


    const existinguser=await User.findOne({email})
    if (existinguser) {
        return res.status(400).json({
            success:false,
            message:"Already exists in db"
        })
    }

    const recentOtp=await Otp.find({email}).sort({createdAt:-1}).limit(1)
    console.log(recentOtp)

    console.log(recentOtp)
    if (recentOtp.length==0) {
        return res.status(400).json({
            success:false,
            message:"OTP not found in the db"
        })
    } else if (otp !== recentOtp[0].otp) {
        return res.status(400).json({
            success:false,
            message:"Invalid otp"
        })
    }

    let approved = "";
	approved === "Instructor" ? (approved = false) : (approved = true);


    const hashedpassword=await bcrypt.hash(password,10);

    const profileDetails=await Profile.create({
        gender:null,
        dateOfBirth:null,
        about:null,
        contactNumber:null
    })

    const user=await User.create({
        firstName,
        lastName,
        email,
        contactNumber,
        password:hashedpassword,
        accountType:accountType,
        approved: approved,
        additionalDetails:profileDetails._id,
        image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`

    })

    res.status(200).json({
        success:true,
        user,
        message:"user register succesfully"
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
        success:false,
        message:`user cant register plz try again afer sometimes ${error.message}`
    })
  }
}


//login

exports.login=async (req,res)=>{
   try {
    const {email,password}=req.body;
   
    if (!email || !password) {
        return res.status(403).json({
            success:false,
            message:"fill all the fields"
        })
    }
    const user=await User.findOne({email});

    if (!user) {
        return res.status(401).json({
            success:false,
            message:"please sign up and then try to sign in here",
        })
    }

    if (await bcrypt.compare(password,user.password)) {
        const payload={
            email:user.email,
            id:user._id,
            accountType:user.accountType
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"24h"
        })
        // user=user.toObject()
        user.token=token;
        user.password=undefined;

        const Option={
            expires:new Date(Date.now()+ 3*24*60*60*1000),
            httpOnly:true,
        }

        res.cookie("token",token,Option).status(200).json({
            success:true,
            token,
            user,
            message:"logged in successfully"
        })
    }
    else{
        return res.status(401).json({
            success:false,
            message:"Password not matched",
        })
    }
   } catch (error) {
    console.log(error)
    console.error(error.message)
    return res.status(500).json({
        success:false,
        message:"loginng failure"
    })
   }

}


exports.sendOtp=async (req,res)=>{

    try {
      const {email}=req.body;
      const checkuseralredayexists=await User.findOne({email})
  
      if (checkuseralredayexists) {
          return res.status(401).json({
              success:false,
              message:"User already registered"
          })
      }
  
      var otp=Otpgenerator.generate(6,{
          lowerCaseAlphabets:false,
          upperCaseAlphabets:false,
          specialChars:false
      })
      console.log("the otp is ",otp)
      
      //unique
      
      const result=await Otp.findOne({otp:otp})
      console.log("Result is Generate OTP Func");
          console.log("OTP", otp);
          console.log("Result", result);
      
      while(result){
          otp=Otpgenerator.generate(6,{
              lowerCaseAlphabets:false,
              upperCaseAlphabets:false,
              specialChars:false
          })
          console.log("the otp is ",otp)
          const result=await Otp.findOne({otp:otp})
      }
  
      const otppayload={email,otp}
      const otpbody=await Otp.create(otppayload)
  
      console.log("otpcreated with otpbody",otpbody)
  
      res.status(200).json({
          success:true,
          message:"OTP created successfully with otp body",
          otp
      })
  
    } catch (error) {
      console.log(error),
      res.status(500).json({
          success:false,
          message:`error while creating the otp here  ${error.message}`
      })
    }
  }
  
//change password

exports.changePassword = async (req, res) => {
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};