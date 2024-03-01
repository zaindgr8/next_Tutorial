import React from 'react'

const getUser=async (id)=>{
  let data = await fetch(`http://localhost:3000/api/users_CRUD/${id}`);
  let user=await data.json()
  return user.result
}

const Page =async ({params}) => {
  const users= await getUser(params.userid)
  let user= users[0]
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        <li>Name: {users.name}</li>
        <li>Subject: {users.subject}</li>
        <li>Age: {users.age}</li>
        <li>ID: {users.id}</li>
      </ul>
    </div>
  );
}

export default Page