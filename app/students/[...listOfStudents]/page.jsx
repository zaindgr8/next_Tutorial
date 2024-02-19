import React from 'react'

const Page = ({params}) => {
  return (
    <div>
      List of Students
      <p>Name:{params.listOfStudents[0]}</p>
      <p>Grade:{params.listOfStudents[1]}</p>
      <p>Subject:{params.listOfStudents[2]}</p>
    </div>
  );
}

export default Page