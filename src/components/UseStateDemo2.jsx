import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [isLoading, setisLoading] = useState(true)
    const stopLoader = ()=>{
        setisLoading(false)
    }
  return (
    <div>
            {
                isLoading &&  <h1>Loading.....</h1>
            }
            <button onClick={()=>{stopLoader()}}>STOP</button>
            <button onClick={()=>{setisLoading(false)}}>STOP</button>
    </div>
  )
}
