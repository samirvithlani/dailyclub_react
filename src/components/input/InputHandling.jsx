import React, { useState } from 'react'

export const InputHandling = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState()
    const [isSubbmited, setisSubbmited] = useState(false)
    const [color, setcolor] = useState()

    const nameHandler = (event)=>{
       // console.log(event.target.value)
        setname(event.target.value)
    }
    const submitHandler =() =>{

            console.log(name,age)
            setisSubbmited(true)
    }
  return (
    <div>
        <h1>InputHandling</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
             {/* {age} */}
        </div>
        <div>
            <label>COLOR</label>
            <input type='color' onChange={(event)=>{setcolor(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>add</button>
        </div>
        {
            isSubbmited && <div style={{color:color}}>
            <h1>OUTPUT</h1>
            <h1>NAME = {name}</h1>
            <h2>AGe = {age}</h2>
        </div>
        }
        
    </div>
  )
}
