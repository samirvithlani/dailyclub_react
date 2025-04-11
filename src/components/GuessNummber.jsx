import React, { useContext, useState } from 'react'
import { NumberContext } from '../NumberContex'

export const GuessNummber = () => {
    const {message,getInput} = useContext(NumberContext)
    const [input, setinput] = useState(0)
  return (
    <div>
        <h1>{message}</h1>
        <input type='text' onChange={(event)=>{setinput(event.target.value)}}></input>
        <button onClick={()=>{getInput(input)}}>GUESS</button>
    </div>
  )
}
