import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req){
  let payload= await req.json()
  console.log(payload)
  if(!payload.name || !payload.email || !payload.age){
      return NextResponse.json({err:"Enter Complete Details", status:false}, {status:404})
  }
  return NextResponse.json({result:"User Added", success:true}, {status:200})
}