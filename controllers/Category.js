const Category=require('../models/Category')

exports.createCategory=async (req,res)=>{
    try {
        const {name,description}=req.body;
        if (!name || !description) {
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const CategorysDetails=await Category.create({name:name,description: description})
        console.log(CategorysDetails)

        res.status(200).json({
            success:true,
            message:"Category creation Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.showAllCategories=async (req,res)=>{
    try {
        const AllCategories=await Category.find({},{name:true,description:true});
        res.status(200).json({
            success:true,
            message:"All Category return successfully",
            Category:AllCategories,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    } 
}


exports.categoryPageDetails=async(reqq,res)=>{
    try {
        const {categoryId}=req.body;
        const selectedcategory=await Category.find({_id:categoryId}).populate('course').exec();
        if (!selectedcategory) {
            return res.status(400).json({
                success:false,
                message:"no any category found",
            })
        }
        const differentcategoies=await Category.find({_id:{$ne:categoryId}}).populate('course').exec();
        
        return res.status(200).json({
            success:true,
            message:"aa gaya",
            selectedcategory,
            differentcategoies
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error in showing page details",
            errror:error.message
        })
        
    }
}