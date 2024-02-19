const getUser = async (id) => {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
};

const Page = async ({ params }) => {
  console.log(params);
  const user = await getUser(params.userid);
  console.log(user[0]);
  const user1 = user[0];
  return (
    <div>
      <h1 className="font-bold">User Details</h1>
      <h1>Name: {user1.name}</h1>
      <h1>Age: {user1.age}</h1>
      {/* <h1>Email: {user1.email}</h1> */}
      <h1>ID: {user1.id}</h1>
    </div>
  );
};

export default Page;
