const mongoose=require('mongoose');

const coursesProgressschema=new mongoose.Schema({
    courseId:{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    comppletedVideo:[{
        type:mongoose.Schemas.Types.ObjectId,
        ref:"SubSection"
    }]

})

module.exports=mongoose.model('CoursesProgress',coursesProgressschema)