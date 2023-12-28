"use client";
import { useEffect, useState } from "react";
import "./../../style.css";
import { NextResponse } from "next/server";
import Link from "next/link";

function page(porps) {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [company, setcompany] = useState("");
  const [color, setcolor] = useState("");
  const [category, setcategory] = useState("");
  //console.log(porps)
  useEffect(() => {
    getproductdetails();
  }, []);

  const getproductdetails = async () => {
    const ProductId = porps.params.editproduct;
    let productdata = await fetch(
      "http://localhost:3000/api/products/" + ProductId
    );
    productdata = await productdata.json();
    if (productdata.success) {
      let result = productdata.result;
      setname(result.name);
      setprice(result.price);
      setcolor(result.color);
      setcategory(result.category);
      setcompany(result.company);
    }
    console.log(productdata);
  };
  const updateddata =async () => {
    const ProductId = porps.params.editproduct;
    let result = await fetch(
      "http://localhost:3000/api/products/" + ProductId,{
        method:"PUT",
        body:JSON.stringify({name,price,company,color,category})
      }
    );
    result = await result.json()
    if(result.success)
    {
        alert("Product Edited")
    }

  };

  const cleartext = () => {
    setname("");
    setprice("");
    setcompany("");
    setcolor("");
    setcategory("");
    alert("Clear All");
  };
  return (
    <div className="center">
      <h1>Edit Product</h1>
      Name :
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        name="name"
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      Price:{" "}
      <input
        type="text"
        placeholder="Enter Your price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <br />
      Company:{" "}
      <input
        type="text"
        placeholder="Enter Your company"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
      />
      <br />
      Color :
      <input
        type="text"
        placeholder="Enter Your color"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      />
      <br />
      Category:
      <input
        type="text"
        placeholder="Enter Your category"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />
      <br />
      <button onClick={updateddata}>Edit Product</button>&nbsp;&nbsp;
      <button onClick={cleartext}>Clear</button>
      <br />
      <br />
      <Link href="/productlist">Go to Product List</Link>
    </div>
  );
}

export default page;
