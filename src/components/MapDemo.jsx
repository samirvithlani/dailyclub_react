import React from 'react'


//forEach --> Map
//void --> array
export const MapDemo = () => {

    var users = ["ram","shyam","amit","sumit"]
  return (
    <div>
        <h1>MAP DEMO</h1>
        {
            users.map((user)=>{
                return (<h1>{user}</h1>)
            })
        }
        
    </div>
  )
}
