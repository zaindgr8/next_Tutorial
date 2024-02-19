import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req){
  let payload= await req.json()
  console.log(payload.name)
  return NextResponse.json({result:"Hello"})
}