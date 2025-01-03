import React from 'react'
import { StudentList } from './StudentList'

export const Student = () => {
    const students = [
        {
            id:1,
            name:"ram",
            age:23,
            marks:87
        },
        {
            id:2,
            name:"shyam",
            age:22,
            marks:77
        },
        {
            id:3,
            name:"ajay",
            age:22,
            marks:68

        }
    ]
  return (
    <div>
        <h1>Student component..</h1>
        <StudentList students ={students}></StudentList>
    </div>
  )
}
