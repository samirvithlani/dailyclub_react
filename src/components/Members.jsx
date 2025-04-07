import React, { useState } from 'react'
import { MemberList } from './MemberList'
import { MemberContext } from './MemberContext'

export const Members = () => {
    const [list, setlist] = useState([
        {
            id:101,
            name:"amit",
            age:23,
            gender:"male"
        },
        {
            id:102,
            name:"ram",
            age:22,
            gender:"male"
        }
    ])
  return (
    <div>
        <h1>MEMBERS</h1>
        <MemberContext.Provider value={{list,setlist}}>
            <MemberList/>
        </MemberContext.Provider>
    </div>
  )
}
