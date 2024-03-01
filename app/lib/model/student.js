import mongoose from "mongoose"

const studentModel= new mongoose.Schema({
    name:String,
    subject:String,
    goal:String
})

export const Student=mongoose.models.students || mongoose.model("students", studentModel)