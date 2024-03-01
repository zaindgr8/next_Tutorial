import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectString } from "../../lib/db";
import {Student} from "../../lib//model/student"

export async function GET(){
  await mongoose.connect(connectString)
  const data= await Student.find()
  return NextResponse.json({result:data})
}