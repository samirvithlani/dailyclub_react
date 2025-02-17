import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {

    //()=>{}callback,,,
    //[] dependcy array..

    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("use effect called...")
    },[count])

  return (
    <div>
        <h1>USE EFFECT DEMO</h1>
        {count}
        <button onClick={()=>{setcount(count+1)}}>+</button>
    </div>
  )
}
