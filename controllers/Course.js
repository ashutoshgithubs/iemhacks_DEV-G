const Course=require('../models/Course');
const User=require('../models/User')
const Category=require('../models/Category')
const {uploadImagetoCloudinary}=require('../utils/imageUploader')

exports.createCourse=async (req,res)=>{
    try {
        const userId = req.user.id;
        let {courseName,coursedescripttion,tag,category,status,instructions,price,whatyouwilllearn}=req.body;
        const thumbnail=req.files.thumbnailImage
        if (!courseName || 
            !coursedescripttion || 
            !whatyouwilllearn ||
            !tag || 
            !price ||
            !thumbnail ||
            !category) {
            return res.status(400).json({
                success:false,
                message:"please fil  all the filed completely"
            })
        }

        if (!status || status === undefined) {
			status = "Draft";
		}

        //error 
        
        const instructorDetails = await User.findById(userId, {
			accountType: "Instructor",
		});
        console.log(instructorDetails)

        if (!instructorDetails) {
            return res.status(404).json({
                success:false,
                message:"instructor detail not found",
            })
        }


		const categoryDetails = await Category.findById(category);

        if (!categoryDetails) {
            return res.json({
                success:false,
				message: "Category Details Not Found",
            })
        }
        const thumbnailImage=await uploadImagetoCloudinary(thumbnail,process.env.FOLDER_NAME)
        const newCourse=await Course.create({
            courseName,
            coursedescripttion,
            instructor:instructorDetails._id,
            whatyouwilllearn:whatyouwilllearn,
            price:price,
			tag: tag,
            category: categoryDetails._id,
            thumbnail:thumbnailImage.secure_url,
            status: status,
			instructions: instructions,
        })

        await User.findByIdAndUpdate({_id:instructorDetails._id},{
                                    $push:{
                                        courses:newCourse._id
                                    }
        },{new:true})
        await Category.findByIdAndUpdate({_id:categoryDetails._id},{
                                    $push:{
                                        course:newCourse._id
                                    }
        },{new:true})

        res.status(200).json({
            success:true,
            message:"Course created successfully ",
            data:newCourse
        })


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message:"failed to created course",
            error:error.message
        })
    }
}


exports.getallCourses=async(req,res)=>{
    try {
        const allcourses=await Course.find({},{courseName:true,
            coursedescripttion:true,
            price:true,
            thumbnail:true,
            instructor:true,
            ratingandreviews:true,
            studentsenrolled:true
        }).populate('instructor').exec()
        return res.json({
            success:true,
            message:"Data get fetched successfully",
            allcourse:allcourses
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"we cant fetch data from courses ",
            error:error.message
        })
    }
}

//getCourseDetails
exports.getCourseDetails = async (req, res) => {
    try {
            //get id 
            const {courseId} = req.body;
            //find course details
            const courseDetails = await Course.find(
                                        {_id:courseId})
                                        .populate(
                                            {
                                                path:"instructor",
                                                populate:{
                                                    path:"additionalDetails",
                                                },
                                            }
                                        )
                                        .populate("category")
                                        .populate("ratingandreviews")
                                        .populate({
                                            path:"coursecontent",
                                            populate:{
                                                path:"subSection",
                                            },
                                        })
                                        .exec();

                //validation
                if(!courseDetails) {
                    return res.status(400).json({
                        success:false,
                        message:`Could not find the course with ${courseId}`,
                    });
                }
                //return response
                return res.status(200).json({
                    success:true,
                    message:"Course Details fetched successfully",
                    data:courseDetails,
                })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}