"use client";
import { useState } from "react";
import "./../style.css";
import { NextResponse } from "next/server";
import Link from "next/link";

function page() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [company, setcompany] = useState("");
  const [color, setcolor] = useState("");
  const [category, setcategory] = useState("");
 const Addproduct=async()=>{
    let result = await fetch("http://localhost:3000/api/products",{
        method:"POST",
        body:JSON.stringify({name,price,company,color,category})

        
    });
    result = await result.json()
    if(result.success)
    {
        alert("Product Added")
    }
   // return NextResponse({result},{status:200})
 }

 const cleartext=()=>{
    setname("");setprice("");setcompany("");setcolor("");setcategory("");
    alert("Clear All")
 }
  return (
    <div className="center">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        name="name"
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your company"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your color"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your category"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />
      <br />
      <button onClick={Addproduct}>Add Product</button>&nbsp;&nbsp;
      <button onClick={cleartext} >Clear</button><br></br>
      <Link href="/productlist">Go to Product List</Link>
    </div>
  );
}

export default page;
