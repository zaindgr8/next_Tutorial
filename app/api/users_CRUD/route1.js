import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {
  let payload = await req.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { err: "Enter Complete Details", success: false },
      { status: 404 }
    );
  }
  return NextResponse.json(
    { result: "User Created", success: true },
    { status: 200 }
  );
}
