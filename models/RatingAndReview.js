const mongoose=require('mongoose');

const RatingAndReviewschema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    rating:{
        type:Number,
        required:true,

    },
    review:{
        type:String,
        required:true,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        require:true,
        index:true
    }
})

module.exports=mongoose.model("RatingAndReview",RatingAndReviewschema)