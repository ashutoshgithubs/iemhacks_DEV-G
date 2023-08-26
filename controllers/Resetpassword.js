const User=require('../models/User');
const mailsend=require('../utils/mailSender');
const bcrypt=require('bcrypt')
const crypto=require('crypto')

exports.resetPasswordToken=async (req,res)=>{
   try {
    const {email}=req.body
    const user=await User.findOne({email})

    if (!user) {
        return res.status(400).json({
            success:false,
            messsage:"no such user found "
        }) 
    }

    const token = crypto.randomBytes(20).toString("hex");
    const updatedDetails=await User.findOneAndUpdate({email},{
                                                    token:token,
                                                    reseetPasswordExpires:Date.now() + 5*60*60*100,
    },{new:true});

    const url=`http://localhost:3000/update-password/${token}`

    await mailsend(email,"Password Reset Link ",`Hi it seems Like you Forget the Password reset it and try to <b>remember in future</b> here is Link for reset Password ${url}`)
    return res.status(200).json({
        success:true,
        message:"Email Sent Successfully, Please Check Your Email to Continue Further",
        token:token,
    })

   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        messsage:"somthing going wring while pushing mmessage toi email"
    })
   }
}


//resetpasswordtoken

exports.resetpassword=async (req,res)=>{
  try {
    const {password,confirmpassword,token}=req.body
    console.log('confirm password',confirmpassword)
    console.log('password ', password)
    if (confirmpassword !== password ) {
        return res.json({
            success:false,
            message:"password not match with confirm passswod",
        })

    }
    const userdetails=await User.findOne({token:token})
    if (!userdetails) {
        return res.json({
            success:false,
            message:"token is  invalid or not found"
        })

    }
    console.log(userdetails.reseetPasswordExpires)
    // console.log(Date.now)
    // (userdetails.reseetPasswordExpires<Date.now())?(console.log('sahi hi toh hai')):console.log('wanda')
    if (userdetails.reseetPasswordExpires < Date.now()) {
        return res.json({
            success:false,
            message:"token is expire , plz regenerate the token"
        })
    }

    const hashpassword=await bcrypt.hash(password,10)

    await User.findOneAndUpdate({token:token},{password:hashpassword},{new:true})

    res.status(200).json({
        success:true,
        message:"reset password successfully wow"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        message:"Something went wrong while reseting your password.mail "
    })
  }
}


//resetpassword