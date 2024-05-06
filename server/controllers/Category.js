const Category = require("../models/Category");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
exports.createCategory = async (request, response) => {
  try {
    //Fetch data
    const { name, description } = request.body;
    //Validation
    if (!name) {
      return response.status(400).json({
        success: false,
        messsage: "All fields are required",
      });
    }
    //Create DB entry
    const categoryDetails = await Category.create({
      name: name,
      description: description,
    });
    console.log("Category Details: ", categoryDetails);
    return response.status(200).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get all Category
exports.showAllCategory = async (request, response) => {
  try {
    const allCategory = await Category.find({});
    return response.status(200).json({
      success: true,
      data: allCategory,
      message: "All category fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Category Page Details
exports.categoryPageDetails = async (request, response) => {
  try {
    //Get category Id
    const { categoryId } = request.body;
    // Get courses for the specified category
    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "course",
        match: { status: "Published" },
        populate: "reviewAndRating",
      })
      .exec();
    if (!selectedCategory) {
      return response
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    // Handle the case when there are no courses
    if (selectedCategory.course.length === 0) {
      console.log("No courses found for the selected category.");
      return response.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      });
    }

    // Get courses for other categories
    const categoriesExceptSelected = await Category.find({
      _id: { $ne: categoryId },
    });
    let differentCategories = await Category.findOne(
      categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
        ._id
    )
      .populate({
        path: "course",
        match: { status: "Published" },
      })
      .exec();

    //Get top 10 selling courses
    const getAllCategories = await Category.find()
      .populate({
        path: "course",
        match: { status: "Published" },
        populate: {
          path: "instructor",
        },
      })
      .exec();
    //Create a new flat array of courses
    const allCourses = getAllCategories.flatMap((category) => category.course);
    //Find most selling courses
    const mostSellingCourses = allCourses
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10);
    //Return response
    return response.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategories,
        mostSellingCourses,
      },
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: error.messsag,
    });
  }
};
