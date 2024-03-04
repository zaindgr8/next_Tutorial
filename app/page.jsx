import Link from "next/link";
import React from "react";
import Navbar from "./navbar/page";
import FileUpload from "./FileUpload/page"
const Page = () => {
  return (
    <>
      <Navbar />
      <FileUpload/>
    </>
  );
};

export default Page;
