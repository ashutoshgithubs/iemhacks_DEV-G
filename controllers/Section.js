const Section=require('../models/Section');
const Course=require('../models/Course');;

exports.createSection=async(req,res)=>{
try {
    const {sectionName,courseId}=req.body
    if (!courseId || !sectionName) {
        return res.status(400).json({
            success:false,
            message:"fill all the above fields"
        })
    }

    const newSection = await Section.create({sectionName:sectionName});
    const updatedCourseDetails=await Course.findByIdAndUpdate(courseId,{
        $push:{
            coursecontent:newSection._id
        }
        //populate section and subsection
        //  coursecontent.SubSection
    },{new:true}).populate({
        path: "coursecontent",
        populate: { 
            path: "subSection",
        },
    }).exec();

    res.status(200).json({
        success:true,
        message:'section Created succecfully',
        updatedCourseDetails,
    })

} catch (error) {
    return res.status(500).json({
        success:false,
        error:error.message,
        message:"Unable to Create Section here"
    })
}
}

exports.updateSection=async(req,res)=>{
    try {
        const {sectionName,sectionId}=req.body;
        if (!sectionId || !sectionName) {
            return res.status(400).json({
                success:false,
                message:"fill all the above fields to Update"
            }) 
          }
        const section=await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true})
        return res.status(200).json({
            success:true,
            message:"Section Updated Successfully",
            section
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Unable to Update Section here"
        })
    }
}


exports.deleteSection=async(req,res)=>{
    try {
    const {sectionId}=req.body;
    console.log(sectionId)
    await Section.findByIdAndDelete({_id:sectionId})
    //
    //   todo on testing : do we need to delete this
    // Course.findByIdAndUpdate(courseId,{
    //     $pull:{
    //         coursecontent:sectionId
    //     }
    // })
    res.status(200).json({
        success:true,
        message:"Succesfully deleted"
    })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Unable to deleteion Section here"
        })
    }
}