import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = (props) => {
    var employeeData = [
        {
            id:1,
            name:"amit"
        },
        {
            id:2,
            name:"sumit"
        }
    ]
  return (
    <div>
        <h1>EMPLOYEES - {props.title}</h1>
        <EmployeeList title = {props.title} empData = {employeeData}></EmployeeList>
    </div>
  )
}
