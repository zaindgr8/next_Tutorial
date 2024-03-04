"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/page";
import Delete from "../DeleteProduct"

// const fetchData = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/products");
//     console.log("Response Data:", response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// fetchData();

const Page = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
const getData = async () => {
  const response = await axios.get("http://localhost:3000/api/products", {cache:"no-cache"});
  setProducts(response.data.result);
  console.log(response.data.result);
};
getData();
  },[])


  return (
    <>
      <Navbar />
      {products?.map((item) => (
        <ul className="mb-1 p-5">
          <li>Name: {item.name}</li>
          <li>Price: {item.price}</li>
          <li>Company: {item.company}</li>
          <li>Color: {item.color}</li>
          <li>Category:{item.category}</li>
          <li>ID: {item._id}</li>
          <button className="text-yellow-500 border-2 p-1 rounded-lg ">
            <Link href={`/components/products/${item._id}`}>Edit</Link>
          </button>
          <button><Delete id={item._id}/></button>
          {/* <button className="text-red-500 border-2 p-1 rounded-lg ml-2">
            <Link href={`components/products/${item._id}`}>Delete</Link>
          </button> */}
        </ul>
      ))}
    </>
  );
};

export default Page;
