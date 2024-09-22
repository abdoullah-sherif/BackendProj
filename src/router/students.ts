import express from "express";
import { studentModel } from "../model/student";

const router = express.Router();



router.get('/',async (req,res)=>{
    const students = await studentModel.find();
   return res.status(200).send(students);
})
router.post("/",async (req,res) => {
  const data = req.body;
  const student = await studentModel.create(data);
  student.save();
  res.status(201).send(student);
})

router.put("/:id",async (req,res) => {
  const id = req.params.id;
  const data = req.body;
  const updatestudent = await studentModel.findByIdAndUpdate(id,data,{new:true});
  if(!updatestudent)
  {
   return  res.status(404);
  }
  res.status(200).send(updatestudent);
  
})
router.delete("/:id",async (req,res) => {
  const id = req.params.id;
  const student = await studentModel.findByIdAndDelete(id);

  if(!student)
  {
    return res.status(404);
  }
  res.send("okay");
})

export default router ;