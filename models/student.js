const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        default:""
    },
    subjects:{
        type:Array,
        default:[]
    },
    class:{
        type:String,
        default:""
    },
    society:{
        type:Array,
        default:[]
    },
    year:{
        type:String,
        default:""
    }
});

const student=mongoose.model('student',studentSchema);
module.exports=student;
