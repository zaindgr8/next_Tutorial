import { NextResponse } from "next/server";
import { user } from "../../../util/db";


// export function GET(req, res) {
//   console.log(res);
//   const data = user;
//   return NextResponse.json(data, { status: 200 });
// }

// export function GET(req, res) {
//   const data = user;
//   const userData = data.filter((item) => item.id == res.params.id);
//   return NextResponse.json(userData, { status: 200 });
// }

export function GET(req, res) {
  //   const data = user
  //   console.log(data, con.params.id)
  const userData = user.filter((item) => item.id == res.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}


