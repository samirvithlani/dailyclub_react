import React from 'react'
import { SubEmployee } from './SubEmployee'

//array --> subemployee..
export const Employee = (props) => {
  var employees = [
    {
      id:101,
      name:"ram",
      job:"CEO"
    },
    {
      id:102,
      name:"shyam",
      job:"CTO"
    }
  ]
  return (
    <div>
        <h1>EMPLOYEES...
            <span>Title {props.title}</span>
        </h1>

        <SubEmployee title = {props.title} employees={employees}></SubEmployee>
    </div>
  )
}
