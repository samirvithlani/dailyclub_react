import React, { useMemo, useState } from 'react'
import { NumberContext } from '../NumberContex'
import { GuessNummber } from './GuessNummber'

export const GenerateNumber = () => {
    
    const [message, setmessage] = useState("guess number")
    const randomNo = useMemo(()=>{return Math.floor(Math.random()*100)},[])
    console.log(randomNo)
    const [guessedNumbers, setguessedNumbers] = useState([])
    
    const getInput = (guess)=>{

        var diff = randomNo - guess;
        console.log(diff)
        if (diff>=30){
            
            setmessage("too low")
        }
        else{
            setmessage("ok")
        }
    
    }

  return (
    <div>
        <NumberContext.Provider value={{message,getInput}}>
            <GuessNummber></GuessNummber>
        </NumberContext.Provider>
    </div>
  )
}
