import React from 'react'

export const EmployeeList = (props) => {
    console.log("employee list props",props)
  return (
    <div>
        <h1>EMPLOYEE lis {props.title}</h1>
        {
            props.empData.map((emp)=>{
                return<div>
                    <h1>{emp.id} {emp.name}</h1>
                    </div>
            })
        }
    </div>
  )
}
