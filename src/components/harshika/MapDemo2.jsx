import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {
            id:1,
            name:"raj",
            age:23
        },
        {
            id:2,
            name:"parth",
            age:25
        }
    ]
  return (
    <div>
        <h1>Map demo 2</h1>
        {
            users.map((u)=>{
                return<div>
                    <h1>Id = {u.id}</h1>
                    <h2>Name = {u.name}</h2>
                    <h3 style={{color:u.age>=25?"green":"red"}}>{u.age}</h3>
                </div>
            })
        }
    </div>
  )
}
