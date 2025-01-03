import React from 'react'
import { SubEmployee } from './SubEmployee'

export const Employee = (props) => {
  return (
    <div>
        <h1>EMPLOYEES...
            <span>Title {props.title}</span>
        </h1>

        <SubEmployee title = {props.title}></SubEmployee>
    </div>
  )
}
