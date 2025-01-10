import React from 'react'

export const MapDemo1 = () => {
    //loop
    var users = ["ram","shyam","seeta","geeta","hari"]
  return (
    <div>
        <h1>MAP DEMO 1</h1>
        {
            users.map((u)=>{
                return <h1>{u}</h1>
            })
        }
    </div>
  )
}
