import { Products } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectionSrt } from "@/lib/db";

export async function PUT(req,res){
    //console.log(res)
    //{ params: { productid: '10' } }
    const ProductId=res.params.productid;
    const filter={_id:ProductId}

    const payload= await req.json()
    //console.log(payload);

    await mongoose.connect(ConnectionSrt);
    const result=await Products.findOneAndUpdate(filter,payload);


    return NextResponse.json({result,success:true})

}

export async function GET(req,res){
    //console.log(res)
    //{ params: { productid: '10' } }
    const ProductId=res.params.productid;
    const record={_id:ProductId}

    await mongoose.connect(ConnectionSrt);
    const result=await Products.findById(record);

    return NextResponse.json({result,success:true})

}
export async function DELETE(req,res){
    const ProductId=res.params.productid;
    const record={_id:ProductId}

    await mongoose.connect(ConnectionSrt);
    const result=await Products.deleteOne(record);

    return NextResponse.json({result,success:true})
}