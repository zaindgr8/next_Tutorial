"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../../navbar/page";

// const fetchData = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/products");
//     console.log("Response Data:", response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// fetchData();

const Page = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/products");
    setProducts(response.data.result);
    console.log(response.data.result);
  };
  getData();

  return (
    <>
      <Navbar />
      {products?.map((item) => (
        <ul className="mb-2 p-5">
          <li>Name: {item.name}</li>
          <li>Price: {item.price}</li>
          <li>Company: {item.company}</li>
          <li>Color: {item.color}</li>
          <li>Category:{item.category}</li>
          <button><Link href={`/components/products`}></Link></button>
        </ul>
      ))}
    </>
  );
};

export default Page;
