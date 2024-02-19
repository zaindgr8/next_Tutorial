import Link from 'next/link';
import React from 'react'


 const getUser = async () => {
   let data = await fetch("http://localhost:3000/api/users");
   data = await data.json();
   return data;
 }

const Page =async () => {
  const users=await getUser()
  // let user=users[0].id
  console.log(users)
  return (
    <div>
      <h1 className="font-bold">Data List</h1>
      {users.map((item) => (
        <ul>
          <Link href={`users/${item.id}`}>{item.name}</Link>
        </ul>
      ))}
    </div>
  );
}

export default Page