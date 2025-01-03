import React from 'react'
//<link rel href="">
import "../assets/css/header.css"

//rafc

//all component should start with cap...
export const Header = (props) => {
  //props ={}
  console.log("header props",props)
  return (
    <div className='header'>
        <h1>Header...
          <span>{props.title}</span>
        </h1>
        
    </div>
  )
}
