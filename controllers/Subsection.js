const Section=require('../models/Section');
// const Subsection = require('../models/Subsection');
const SubSection=require('../models/Subsection');
const { uploadImagetoCloudinary } = require('../utils/imageUploader');


exports.createSubsection=async(req,res)=>{
   try {
    const {description,sectionId,title}=req.body
    const video=req.files.VideoFile

    if (!description || !sectionId || !title  || !video) {
        return res.status(400).json({
            success:false,
            message:"fill all the above fields to make subsection"
        }) 
    }

    const uploadDetails=await uploadImagetoCloudinary(video,process.env.FOLDER_NAME)
    console.log(uploadDetails)
    const SubSectionDetails=await SubSection.create({
        title:title,
        timeDuration:`${uploadDetails.duration}`,
        description:description,
        videoUrl:uploadDetails.secure_url
    })

  const updatedsection=  await Section.findByIdAndUpdate({_id:sectionId},
    { $push:{
            subSection:SubSectionDetails._id}}
    ,{new:true}).populate("subSection").exec()

    // hw populate the updatedsection with populate

    res.status(200).json({
        success:true,
        message:"all the subsection arge are created ",
        updatedsection
    })
   } catch (error) {
    return res.status(500).json({
        success:false,
        error:error.message,
        message:"Unable to make sub-Section"
    })
   }

}


exports.updateSubsection=async(req,res)=>{
   try {
    const {description,sectionId,title}=req.body
    const subSection = await SubSection.findById(sectionId)

    const video=req.files.VideoFile
    if (!subSection) {
        return res.status(404).json({
          success: false,
          message: "SubSection not found",
        })
      }
    if (!description || !sectionId || !title || !timeDuration || !video) {
        return res.status(400).json({
            success:false,
            message:"fill all the above fields to make subsection"
        }) 
    }

    const uploadDetails=await uploadImagetoCloudinary(video,process.env.FOLDER_NAME)

    const SubSectionDetails=await SubSection.findByIdAndUpdate(subSectionId,{
        title:title,
        timeDuration:`${uploadDetails.durations}`,
        description:description,
        videoUrl:uploadDetails.secure_url
    })


    // hw populate the updatedsection with populate

    res.status(200).json({
        success:true,
        message:"all the subsection  are updated ",
        SubSectionDetails
    })
   } catch (error) {
    return res.status(500).json({
        success:false,
        error:error.message,
        message:"Unable to uppdate sub-Section"
    })
   }

}

exports.deleteSubsection=async(req,res)=>{
   try {
    const {subSectionId,sectionId}=req.params
    // const video=req.files.VideoFile

    if (!sectionId || !subSectionId ) {
        return res.status(400).json({
            success:false,
            message:"fill all the above fields to make subsection"
        }) 
    }

    // const uploadDetails=await uploadImagetoCloudinary(video,process.env.FOLDER_NAME)

    await Section.findByIdAndUpdate(sectionId,{
        $pull:{
            subSection:subSectionId,
        }
    },{new:true})

    const deleteDetails=await SubSection.findByIdAndDelete(subSectionId)

    if (!deleteDetails) {
        return res
          .status(404)
          .json({ success: false, message: "SubSection not found" })
      }
  


    // hw populate the updatedsection with populate

    res.status(200).json({
        success:true,
        message:"all the subsection  are updated ",
        SubSectionDetails
    })
   } catch (error) {
    return res.status(500).json({
        success:false,
        error:error.message,
        message:"Unable to uppdate sub-Section"
    })
   }

}