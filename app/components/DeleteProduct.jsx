import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteProduct = (props) => {
   const router = useRouter();
  const deleteProduct = async () => {
    let productId = props.id;
    try {
      let response = await axios.delete(
        `http://localhost:3000/api/products/${productId}`
      );
      if (response.status === 200) {
        alert("Deleted");
        router.push("/components/products");
      }
    } catch (error) {
      alert("Error Deleting", error);
    }
  };

  return (
    <div>
      <button
        onClick={deleteProduct}
        className="border-2 p-1 rounded-lg ml-3 text-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteProduct;
