"use client"
import axios from 'axios'
import React, { useState } from 'react'

const Page = () => {
    const [file, setFile]= useState()

    const onSubmit=async (e)=>{
        e.preventDefault()
        console.log(file);
        const data= new FormData()
        data.set("file", file)
       const result = await fetch("http://localhost:3000/api/upload", {
         method: "POST",
         body: data,
       });
       console.log(result);
    }


  return (
    <div className="p-5">
      <h1 className="font-bold">Upload File Page</h1>
      <form onSubmit={onSubmit} >
        <input
        type="file"
        name="file"
          className="border-2 rounded-lg p-1"
          placeholder="Upload Image Here"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button
          className="border-2 rounded-lg bg-gray-100 ml-3 p-2"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default Page