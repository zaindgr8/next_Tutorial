"use client"
import React, { useState } from 'react'
import axios from "axios";

const Page = () => {
    const [name, setName]=useState("")
    const [email, setEmail] = useState("");
    const [age, setAge]=useState("")

   const addUser=async ()=>{
    try{
    const response = await axios.post("http://localhost:3000/api/users_CRUD",{
        name, email, age
    })
    console.log(response.data)
    if(response.data.success){
        alert("User Added Successfully")
    }else{
        alert("Add Complete Information")
    }}catch(err){
        console.log(err)
        alert("User Not Added")
    }
   }
    
    // const addUser=async ()=>{
    //     let response = await fetch("http://localhost:3000/api/users_CRUD", {
    //       method: "POST",
    //       body: JSON.stringify({ name, age, email }),
    //     });
    //     response= await response.json()
    //     console.log(response)
    //      if (response.success) {
    //        alert("User Added Successfuly!");
    //      }else{
    //         alert("Check data & try again")
    //      }
    // }
   
  return (
    <div className="p-5">
      <h1 className="font-bold">Add User Details</h1>
      <div className="flex flex-col gap-y-3 mt-3">
        <input
          className="border-2 max-w-sm rounded-lg p-1 border-black"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="border-2 max-w-sm rounded-lg p-1 border-black"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="border-2 max-w-sm rounded-lg p-1 border-black"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
      </div>
      <button onClick={addUser} className="border-2 mt-3 p-2 rounded-lg bg-blue-300">Add User</button>
    </div>
  );
}

export default Page