"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../navbar/page";

const EditProducts = (props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

    useEffect(() => {
        const getProductDetails = async () => {
          let productId = props.params.editproduct
          const response = await axios.get(
            `http://localhost:3000/api/products/${productId}`
          );
          console.log(response.data.result);
          let x=response.data.result
          setName(x.name)
          setPrice(x.price)
          setCompany(x.company)
          setColor(x.color)
          setCategory(x.category)
        };
          getProductDetails();
    }, [])

    const updateProduct=async()=>{
      let productId= props.params.editproduct
      let response = await axios.put(
        `http://localhost:3000/api/products/${productId}`
      ,{
        name,category,company, price, color
      })
      let x=response.data
      if(x.success){
        alert("Updated")
        router.push("/components/products")
      }
    }



  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 p-5">
        <span className="font-bold">Update Products</span>
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Price"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Company"
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Color"
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          className="border-2 rounded-lg max-w-[15%] px-2"
          placeholder="Enter Category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button
          onClick={updateProduct}
          className="border-2 rounded-lg p-1 flex max-w-[10%] bg-green-300 hover:bg-green-200"
        >
          Update Product
        </button>
        <button className="text-blue-500 hover:text-blue300 justify-start">
          <Link href="/components/products">Go to Products List</Link>
        </button>
      </div>
    </>
  );
};

export default EditProducts;
