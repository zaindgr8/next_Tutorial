import Link from 'next/link';
import React from 'react'
import DeleteUser from "../util/DeleteUser"


 const getUser = async () => {
   let data = await fetch("http://localhost:3000/api/users_CRUD");
   data = await data.json();
   return data;
 }

const Page =async () => {
  const users=await getUser()
  // let user=users[0].id
  console.log(users)
  return (
    <div>
      <h1 className="font-bold">User List</h1>
      {users.map((item) => (
        <div className="">
          <Link href={`users/${item.id}`}>{item.name}</Link>
          <span className="ml-2 text-yellow-500">
            <Link href={`users/${item.id}/update`}>Edit</Link>
          </span>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}

export default Page