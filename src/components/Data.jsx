import React from 'react'
import useAuthentication from '../hooks/UseAuthentication'

export const Data = () => {

    const{isAdmin} = useAuthentication()
    console.log(isAdmin)
  return (
    <div>
        <h1>DATA</h1>
        
        {
          isAdmin && <button>DELETE</button>
        }
        
        <button>EDIT</button>
        <button>GET</button>
    </div>
  )
}
