"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Page = ({params}) => {
  let id = params.userid;
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [age, setAge]= useState("")

   useEffect(() => {
     getUserDetails();
   });

  // const updateData=async ()=>{
  //   let data= await fetch("http://localhost:3000/api/users_CRUD/"+id)
  //   data= await data.json()
  //   setName(data.result.name)
  //   setEmail(data.result.email)
  //   setAge(data.result.age)
  // }
  const getUserDetails=async ()=>{
    const response = await axios.get(`http://localhost:3000/api/users_CRUD/${id}`)
    const userData= response.data.result
     setName(userData.name);
     setEmail(userData.email);
     setAge(userData.age);
  }


  // const updateUser=async ()=>{
  //   let result = await fetch(`http://localhost:3000/api/users_CRUD/${id}`,{
  //     method:"PUT",
  //     body:JSON.stringify({name, age, email})
  //   });
  //   result= await result.json()
  //   console.log(result)
  // }

  const updateUser = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/users_CRUD/${id}`,
        {
          name,
          age,
          email,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 

  console.log(id)
  return (
    <div className="p-5">
      <h1 className="text-blue-500 mb-2">User Update Data</h1>
      <div className="flex flex-col max-w-[20vh] gap-y-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border-2 p-1 rounded-lg"
          placeholder="Enter Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
          className="border-2 rounded-lg p-1"
          placeholder="Enter Email"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="text"
          value={age}
          className="border-2 rounded-lg p-1"
          placeholder="Enter Age"
        />
      </div>
      <button
        onClick={updateUser}
        className="border-2 rounded-lg p-2 flex mt-2"
      >
        Update Data
      </button>
    </div>
  );
}

export default Page