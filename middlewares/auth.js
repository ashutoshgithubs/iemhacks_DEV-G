const jwt=require('jsonwebtoken');
// const user=require('../models/User');
const User = require('../models/User');
require('dotenv').config()



//auth
exports.auth=async(req,res,next)=>{
    try {
        const token=req.body.token ||
                    req.cookies.token ||
                    req.header('Authorisation').replace("Bearer ","");
        console.log("cooies",token)
        if (!token) {
            return res.status(402).json({
                success:false,
                message:"token not found"
            })
        }

        try {
            const decode=await jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode);
            req.user=decode;
            console.log("aaaa",req.user)

        } catch (error) {
            return res.status(401).json({
                success:false,
                messsage:"Token is invalid",
                error:error.message
            })
        }

        next()

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"something went wrong while verification of auth token "
        })
    }
}

//isstudent

exports.isStudent=async (req,res,next)=>{
try {
    if (req.user.accountType !=="Student") {
        return res.status(401).json({
            success:false,
            message:"This is protected Route just for student only"
        })
    }
    next()

} catch (error) {
    return res.status(500).json({
        success:false,
        message:"User role cant verified plz ttry again later"
    })
}
}

exports.isInstructor=async (req,res,next)=>{
try {
    if (req.user.accountType !=="Instructor") {
        return res.status(401).json({
            success:false,
            message:"This is protected Route just for Instructor only"
        })
    }
    next()

} catch (error) {
    return res.status(500).json({
        success:false,
        message:"User role cant verified plz ttry again later"
    })
}
}

exports.isAdmin=async (req,res,next)=>{
try {
    if (req.user.accountType !=="Admin") {
        return res.status(401).json({
            success:false,
            message:"This is protected Route just for Admin only"
        })
    }
    next()

} catch (error) {
    return res.status(500).json({
        success:false,
        message:"User role cant verified plz ttry again later"
    })
}
}
//isInstructor
//isAdmin