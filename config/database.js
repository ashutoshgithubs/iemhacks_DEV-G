// const { default: mongoose } = require('mongoose');/
const mongoose=require('mongoose');
require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("database is connected with the program")})
    .catch((error)=>{console.log("error while conneccting with the database the error is => here we go",error); process.exit(1)})
    
}