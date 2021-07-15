// importing dependencies
const express=require('express');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const colors=require('colors');
//intializing app

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

dotenv.config();
connectDB();


const studentRoutes=require('./routes/student');
app.use('/student',studentRoutes);


app.get('/',async(req,res)=>{
    try {
        return res.status(200).json({
            status:'success',
            message:'server running successfully',
            data:null
        })
    } catch (err) {
        return res.status(401).json({
            status:'failure',
            message:err.message,
            data:null
        })
    }
})




const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log('Server successfully running on PORT',PORT));




