import mongoose ,{ Document , Schema  } from "mongoose";


interface Istudent extends Document {
    name:string,
    email:string,
    age:string,
    class:string
}

const studentSchema : Schema = new Schema({
name :{type:String,required:true},
email : {type:String},
age:{type:String},
class:{type:String}
})

export const studentModel = mongoose.model<Istudent>('students',studentSchema);