import { request } from "http";
import { NextResponse } from "next/server";
import { user } from "../../../util/db";

export function GET(req, res) {
  const userData = user.filter((item) => item.id == res.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  )
}

export async function PUT(req, res){
  let payload= await req.json()
  let userId= res.params.id
  // payload.id= content.params.id
  console.log(userId, payload)
  if (!payload.id || !payload.name || !payload.email || !payload.age) {
    return NextResponse.json(
      { result: "Enter Complete Details", success: false },
      { status: 404 }
    );
  } else {
    return NextResponse.json(
      { result: payload, success: true },
      { status: 200 }
    );
  }
}

export function DELETE(req, res){
  // NextResponse.json({result:"Delete Api"})
  let id=res.params.id
  if(id){
    return NextResponse.json({result:"User Deleted", success:true}, {status:200})
  }else{
    return NextResponse.json({result:"Invalid Input", success:false},{success:400} )
  }
}
