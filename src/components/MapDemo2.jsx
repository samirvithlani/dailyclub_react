import React from 'react'

export const MapDemo2 = () => {

    const students = [
        {
            id:1011,
            name:"amit"
        },
        {
            id:1012,
            name:"raj"
        },
        {
            id:1013,
            name:"jay"
        }
    ]

  return (
    <div>
        <h1>MAP DEMO 2</h1>
        {
            students.map((stu)=>{
                return<div>
                    <p>{stu.id}</p>
                    <h1>{stu.name}</h1>
                </div>
            })
        }
    </div>
  )
}
