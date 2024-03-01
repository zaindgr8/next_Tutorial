import { NextResponse } from "next/server"

export async function GET(req, res){
    // console.log(res);
    let studentDetails= res.params.student
    console.log(studentDetails);
    return NextResponse.json({result:studentDetails, success:true}, {status:200})
}