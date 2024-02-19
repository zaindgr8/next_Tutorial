"use client"
import React from 'react'

const Page = ({params}) => {
    console.log(params)
  return (
    <div>
      <div>Sub:{params.lecture[0]} </div>
      <div>Name:{params.lecture[1]}</div>
      <div>Date:{params.lecture[2]}</div>
    </div>
  );
}

export default Page