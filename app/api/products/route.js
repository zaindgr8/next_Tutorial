import { NextResponse } from "next/server";
import mongoose from "mongoose"
import {connectString} from "../../lib/db"
import {Product} from "../../lib/model/product"



export async function GET() {
  try {
    await mongoose.connect(connectString);
    const data = await Product.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ result: "error" });
  }
}

// export async function GET() {
//   return NextResponse.json({ result: "Testing Successful Next" });
// }

export async function POST(req, res) {
  const payload = await req.json();
  await mongoose.connect(connectString);
  let product = new Product(payload);
  // let product= new Product({
  //   name:"Iphone 14",
  //   price:"1200",
  //   color:"gray",
  //   company:"apple",
  //   category:"mobile"
  // })
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}

// export async function GET(){
//   await mongoose.connect(connectString)
//   const data= await Product.find()
//   return NextResponse.json({result:data})
// }

// export async function GET() {
//   let data = [];
//   success = true;
//   try {
//     await mongoose.connect(connectString);
//     data =await Product.find();
//   } catch (error) {
//     data = { result: "error" };
//     success = false;
//   }
//   return NextResponse.json({ result: data});
// }
