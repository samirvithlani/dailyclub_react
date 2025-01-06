import React, { useState } from 'react'

export const UseStatedemo3 = () => {

    //var users = [100,200,899]
    var [users, setusers] = useState([100,200,300])
    const addMoreUsers = ()=>{

        var randomNo = Math.floor(Math.random()*1000)
        //console.log(randomNo)
        //users.push(randomNo)
        //spread operaotr....
        users = [...users,randomNo]
        console.log("after add...",users)
        setusers(users)
        

    }
  return (
    <div>
        {
            users.map((user)=>{
                return<p>{user}</p>
            })
        }
        <button onClick={()=>{addMoreUsers()}}>add</button>
    </div>
  )
}
