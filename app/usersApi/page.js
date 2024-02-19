"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [user, setUser]= useState([])

    const Check=async ()=>{
        const response =await axios.get("https://dummyjson.com/users")
        setUser(response.data.users)
    }

    useEffect(()=>{
        Check()
    })
    // console.log(user)
 
  return (
    <div>
        {/* <h1 className='text-2xl text-red-500 font-bold' >Users</h1> */}
      {user.map((item) => (
        <p>{item.firstName}</p>
      ))}
    </div>
  );
}

export default Users