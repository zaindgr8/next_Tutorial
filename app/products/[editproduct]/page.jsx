"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/page";

const EditProducts = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const getProductDetails= async()=>{
    let productData = await fetch("http://localhost:3000/api/products");
  }

  useEffect(() => {
    getProductDetails()
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 p-5">
        <span className="font-bold">Update Products</span>
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Price"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Company"
          type="text"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Color"
          type="text"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          className="border-2 rounded-lg p-1 flex max-w-[10%] bg-green-300 hover:bg-green-200"
        >
          Update Product
        </button>
      </div>
    </>
  )
}


export default EditProducts
