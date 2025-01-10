import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count =0;
    //count = stateVariable
    //setCount =>function
    //0 -> count variable intialValue
    //if you want to update in stateVariable>... setFunction
    const [count,setCount]=useState(0)

    const increseCount = ()=>{
        //count++
        setCount(count+1)
        console.log("count = ",count)
    }

  return (
    <div>
        <h1>USE STATE DEMO</h1>
        <h1>count = {count}</h1>
        <button onClick={increseCount}>increse</button>
    </div>
  )
}
