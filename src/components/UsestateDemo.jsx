import React, { useState } from 'react'

export const UsestateDemo = () => {

    //var count=0;
    const [count,setCount] =useState(0)
    //count = state variable...
    //setCount --> function
    //useState --> hook
    //(0) initial state

    const increseCount = ()=>{
        //count++;
        setCount(count+1)
        console.log("count = ",count)
    }
  return (
    <div>
        <h1>USE STATE DEMO</h1>
        <h1>Count = {count}</h1>
        {/* <button onClick={increseCount}>+</button> */}
        <button onClick={()=>{increseCount()}}>+</button>
    </div>
  )
}
