import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { connectString } from "../../../lib/db"
import { Product } from "../../../lib/model/product"

export async function PUT(req, res){
    // let filter= res.params.productid
    const productId= res.params.productid
    const filter= {_id:productId}
    const payload= await req.json()
    await mongoose.connect(connectString)
    const result=await Product.findOneAndUpdate(filter, payload)
    return NextResponse.json({result, success:true})
}

export async function GET(req, res){
    const productId= res.params.productid
    await mongoose.connect(connectString)
    const result= await Product.findById(productId)
    return NextResponse.json({result})
}

export async function DELETE(req, res){
    let productId= res.params.productid
    const record={_id:productId}
    await mongoose.connect(connectString)
    const result= await Product.deleteOne(record)
    return NextResponse.json({result, success:true})
}