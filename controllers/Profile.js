const Profile=require('../models/Profile')
const User=require('../models/User')
const {uploadImagetoCloudinary}=require('../utils/imageUploader')
exports.updateProfile=async(req,res)=>{
    try {
        const{gender,dateOfBirth="",contactNumber,about=""}=req.body;
        const id=req.user.id;
        if (!contactNumber||!id) {
            return res.status(400).json({
                success:false,
                message:"fill the profile form "
            })
        }
        const userDetails=await User.findById(id);
        const profileid=userDetails.additionalDetails;
        // may cause eror

        if (!await Profile.findById({_id:profileid})) {
          return res.status(400).json({
              success:false,
              message:"profile not found "
          })
      }
        const profileDetails=await Profile.findByIdAndUpdate(profileid,{
            dateOfBirth:dateOfBirth,
            about:about,
            gender:gender,
            contactNumber:contactNumber,
        },{new:true})
       
        res.status(200).json({
            success:true,
            message:"profile updated successfully",
            profileDetails,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Unable to Update profile here",
            error:error.message,
        })
    }
}

// how can we schedule delete operation
exports.deleteAccount=async(req,res)=>{
    try {

      // const job = schedule.scheduleJob("10 * * * * *", function () {
      //   console.log("The answer to life, the universe, and everything!");
      // });
      // console.log(job);

        const id =req.user.id;
        // console.log(id)
        const userDetails=await User.findById(id);
        if (!userDetails) {
            return res.status(400).json({
                success:false,
                message:"we are very sorry but user not found",
            })

        }
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})
        //unrolled students from enrolled courses HW
        // delete user
        await User.findByIdAndDelete({_id:id})

        res.status(200).json({
			success: true,
			message: "User deleted successfully",
		});

    } catch (error) {
      console.log(error)
        return res.status(500).json({
          
            success:false,
            error:error.message,
            message:"Unable to delete profile here"
        })
    }
}


exports.getAllUserDetails=async(req,res)=>{
    try {
        const id=req.user.id;
      const details=  await User.findById(id).populate("additionalDetails")
        res.status(200).json({
            success:true,
            message:'got all details about user',
            data:details,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Unable to get details about user"
        })
    }
}

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImagetoCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};

exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.user.id
      const userDetails = await User.findOne({
        _id: userId,
      })
        .populate("courses")
        .exec()
      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.courses,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};