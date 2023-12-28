import { ConnectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Products } from "@/lib/model/product";

export async function GET() {
  let data = [];
  let success=true;
  try { 
    await mongoose.connect(ConnectionSrt);
    data = await Products.find();
  } catch (error) {
    data = { result: "error" };
    success=false;
  }
 // console.log(data)
  return NextResponse.json({ result: data,success});
}

// export async function GET(){
//   await mongoose.connect(ConnectionSrt)
//   let data=await Products.find()
//   //console.log(data);
//   return NextResponse.json({result:data})
// }

export async function POST(rq) {
  const payload = await rq.json();
  await mongoose.connect(ConnectionSrt);
  let product = new Products(payload);
  //let product = new Products({
  // name:"nokia",
  //   price:1200,
  //    company:"samsung",
  //    color:"white",
  //    category:"mobile"});
  let result = await product.save();
  return NextResponse.json({ result, success: true });
}
