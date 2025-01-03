import React from 'react'

export const SubEmployee = (props) => {
    console.log("subemployee props",props)
    //{title:"value...",employees:[]}
  return (
    <div>
      <h1>EMPLOYEE LIST</h1>
      <ul>
        {
          props.employees.map((emp)=>{
            return<li>{emp.id} {emp.name} {emp.job}</li>
          })
        }
      </ul>
    </div>
  )
}
