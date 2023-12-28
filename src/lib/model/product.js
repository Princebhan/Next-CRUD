import mongoose from "mongoose";

export const productmodel = new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
})
export const Products=mongoose.models.products || mongoose.model("products",productmodel)