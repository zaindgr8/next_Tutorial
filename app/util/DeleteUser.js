"use client"
import React from 'react'

const DeleteUser = (props) => {
    const userId= props.id
    // console.log(userId);
    const userDelete=async ()=>{
        let result = await fetch(`http://localhost:3000/api/users_CRUD/${userId}`, {
            method:"delete"
        })
        result= await result.json()
        if (result.success){
            alert("User Deleted!")
        }
    }
  return (
    <div>
        <button onClick={userDelete} className='border-1 rounded-lg p-1 text-red-300'>Delete</button>
    </div>
  )
}

export default DeleteUser