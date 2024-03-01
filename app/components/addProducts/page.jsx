"use client"
import React, { useState } from 'react';
import axios from "axios"
import Navbar from '../../navbar/page';

const AddProducts = () => {
  const [name, setName]= useState("")
  const [price, setPrice]=useState("")
  const [company, setCompany]= useState("")
  const [color, setColor]= useState("")
  const [category, setCategory]= useState("")

  const addProduct=async()=>{
    const response = await axios.post("http://localhost:3000/api/products", {
      name, price, company, color, category
    })
    if(response.data.success){
      alert("Product is added")
    }
  }

  // const addProduct=async()=>{
  //   console.log(name, price, company, color, category)
  //   let result = await fetch("http://localhost:3000/api/products",{
  //     method:"POST",
  //     body:JSON.stringify({name, price, company,color, category})
  //   })
  //   result= await result.json()
  //   if (result.success){
  //     alert("new product added")
  //   }
  // }

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 p-5">
        <span className="font-bold">Add Products</span>
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
          onClick={addProduct}
          className="border-2 rounded-lg p-1 flex max-w-[10%] bg-green-300 hover:bg-green-200"
        >
          Add Product
        </button>
      </div>
    </>
  );
}

export default AddProducts