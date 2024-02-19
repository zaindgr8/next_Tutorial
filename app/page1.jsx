"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// import {API_BASE_URL} from "@/config/constant"

const Page = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  console.log(process.env.DB_PASSWORD);

  return (
    <>
      <div className="">This is Home Page</div>
      {process.env.NODE_ENV == "development" ? (
        <h1>You are on Development Mode</h1>
      ) : (
        <h1>You are on Production Mode</h1>
      )}
      <div className="flex flex-col text-blue-400">
        <Link href="/login">Login</Link>
        <Link href="/about">About</Link>
      </div>
      <button
        className="border-2 p-2 bg-blue-300 rounded-lg"
        onClick={() => router.push("/login")}
      >
        Go to Login Page
      </button>
      <button
        className="border-2 p-2 bg-blue-300 rounded-lg"
        onClick={() => navigate("/about")}
      >
        Go to About Page
      </button>
      <Link
        href="/productList"
        className="px-2 border-2 rounded-xl bg-blue-400"
      >
        Product List
      </Link>
    </>
  );
};

export default Page;
