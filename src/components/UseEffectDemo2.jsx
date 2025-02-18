import React, { useEffect, useState } from 'react'

export const UseEffectDemo2 = () => {

    const [count, setcount] = useState(0)
    //()=>{} -->logica...
    //[] -->dependecy array
    useEffect(()=>{
        console.log("use effect called...")
    },[count])

  return (
    <div>
        <h1>USE_EFFECT DEMO</h1>
        <button onClick={()=>{setcount(count+1)}} className='btn btn-info'>+</button>
        {count}
    </div>
  )
}
