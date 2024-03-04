import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <ul className="p-5 flex gap-x-4 bg-gray-800 text-white ">
        <li className="hover:text-blue-400">
          <Link href="/components/addProducts">Add Products </Link>
        </li>
        <li className="hover:text-blue-400">
          <Link href="/components/products">Products</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar
