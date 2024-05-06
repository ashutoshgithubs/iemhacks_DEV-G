const Section = require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");

//CREATE SECTION
exports.createSection = async (request, response) => {
  try {
    //Fetch data
    const { sectionName, courseId } = request.body;
    //Validate
    if (!courseId || !sectionName) {
      return response.status(400).json({
        success: false,
        message: "Field missing",
      });
    }
    //Create Section
    const newSection = await Section.create({ sectionName });
    //Updat Course Schema with Section Object ID
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection,
        },
      },
      { new: true }
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    //Return response
    return response.status(200).json({
      success: true,
      message: "Section created successfully",
      updatedCourseDetails,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "Issue while creating section, please check & try again later",
      error: error.message,
    });
  }
};

//UPDATE SECTION
exports.updateSection = async (request, response) => {
  try {
    //Fetch data
    const { sectionName, sectionId, courseId } = request.body;
    //Validate
    if (!sectionId || !sectionName) {
      return response.status(400).json({
        success: false,
        message: "Field missing",
      });
    }
    //Update section
    const updatedSectionDetails = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );
    const course = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    //Return response
    return response.status(200).json({
      success: true,
      message: updatedSectionDetails,
      data: course,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Issue while updating section, please check & try again later",
      error: error.message,
    });
  }
};

//DELETE SECTION
exports.deleteSection = async (req, res) => {
  try {
    const { sectionId, courseId } = req.body;
    await Course.findByIdAndUpdate(courseId, {
      $pull: {
        courseContent: sectionId,
      },
    });
    const section = await Section.findById(sectionId);
    console.log(sectionId, courseId);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not Found",
      });
    }

    //delete sub section
    await SubSection.deleteMany({ _id: { $in: section.subSection } });

    await Section.findByIdAndDelete(sectionId);

    //find the updated course and return
    const course = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    res.status(200).json({
      success: true,
      message: "Section deleted",
      data: course,
    });
  } catch (error) {
    console.error("Error deleting section:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
