const router=require('express').Router();
const student=require('../models/student');



// to add a student
router.post('/add',async(req,res)=>{
    try {
        const newStudent=new student();
        newStudent.name=req.body.name;
        newStudent.class=req.body.class;
        newStudent.contact=req.body.contact;
        newStudent.year=req.body.year;
        const {subject}=req.body;
        let d=[];
        for(let i=0;i<subject.length;i++){
            let obj={};
            obj.subject_name=subject[i].name;
            obj.subject_teacher=subject[i].subject_teacher;
            //more other fields can be added as per requirement
            d.push(obj);
        }
        newStudent.subjects=d;
        const {society}=req.body;
        let f=[];
        for(let i=0;i<society.length;i++){
            let obj={};
            obj.society_name=society[i].name;
            obj.society_motto=society[i].motto;
            //more other fields can be added as per requirement
            f.push(obj);
        }
        newStudent.society=f;
        const stud=await newStudent.save();
        if(stud){
            return res.status(200).json({
                status:'success',
                message:'student added successfully',
                data:stud
            })
        }else{
            return res.status(402).json({
                status:'failure',
                message:'Cannot save student details in database',
                data:null
            })
        }
    } catch (err) {
        return res.status(401).json({
            status:'failure',
            message:err.message,
            data:null
        })
    }
});







module.exports=router;