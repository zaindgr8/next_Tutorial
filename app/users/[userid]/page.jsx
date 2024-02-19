import React from 'react'

const getUser=async (id)=>{
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  let user=await data.json()
  return user.result
}

const Page =async ({params}) => {
  const users= await getUser(params.userid)
  let users1= users[0]
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        <li>Name: {users1.name}</li>
        <li>Subject: {users1.subject}</li>
        <li>Age: {users1.age}</li>
      </ul>
    </div>
  );
}

export default Page