const express=require('express')
const app=express()


const userRoutes=require('./routes/User')
const paymentRoutes=require('./routes/Payment')
const courseRoutes=require('./routes/Course')
const profileRoutes=require('./routes/Profile')

const database=require('./config/database')
// const cookieparser=require('cookie-parser')s
const cors=require('cors')
const {cloudinaryConnect}=require('./config/cloudinary')
const fileupload=require('express-fileupload')
const dotenv=require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()

const PORT=process.env.PORT || 4000
database.connect()

app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:true,
    })
)
app.use(
    fileupload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })

)

cloudinaryConnect()

app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/profile',profileRoutes)
app.use('/api/v1/course',courseRoutes)
app.use('/api/v1/payment',paymentRoutes)

app.get('/',(req,res)=>{
    res.json({
        message:`your server is running on port${PORT}`,
    })
})

app.listen(PORT,()=>{
    console.log(`server created @ http://localhost:${PORT}`)
})