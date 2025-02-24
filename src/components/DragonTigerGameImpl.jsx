import React, { useState } from 'react'


const initialDeck = [
    { suit: 'Hearts', value: 1 },
    { suit: 'Hearts', value: 2 },
    { suit: 'Hearts', value: 3 },
    { suit: 'Hearts', value: 4 },
    { suit: 'Hearts', value: 5 },
    { suit: 'Hearts', value: 6 },
    { suit: 'Hearts', value: 7 },
    { suit: 'Hearts', value: 8 },
    { suit: 'Hearts', value: 9 },
    { suit: 'Hearts', value: 10 },
    { suit: 'Spades', value: 1 },
    { suit: 'Spades', value: 2 },
    { suit: 'Spades', value: 3 },
    { suit: 'Spades', value: 4 },
    { suit: 'Spades', value: 5 },
    { suit: 'Spades', value: 6 },
    { suit: 'Spades', value: 7 },
    { suit: 'Spades', value: 8 },
    { suit: 'Spades', value: 9 },
    { suit: 'Spades', value: 10 }
    // For simplicity, using 20 cards total.
];

const getRandomDeck = ()=>{

    const randomIndex = Math.floor(Math.random()*initialDeck.length)
    return initialDeck[randomIndex]
}

export const DragonTigerGameImpl = () => {

    const [betName, setbetName] = useState()
    const [dragon, setdragon] = useState(null)
    const [tiger, settiger] = useState(null)
    const [message, setmessage] = useState("select card..")

    const bet = (betName)=>{
        setbetName(betName)
    }

    const deal = ()=>{
        const tigerCardValue = getRandomDeck()
        console.log(tigerCardValue)
        settiger(tigerCardValue)
        const dragonCardValue = getRandomDeck()
        setdragon(dragonCardValue)
        if(tigerCardValue == dragonCardValue){
            setmessage("its tie")
        }
        else if(tigerCardValue>dragonCardValue && betName ==="TIGER" ||
            dragonCardValue> tigerCardValue && betName ==="DRAGON"){
                setmessage("you win...")
            }
        else{
            setmessage("you loose")
        }    
            
    }

  return (
    <div>
        <h1>DRGON TIGER GAME...</h1>
        <button onClick={()=>{bet('DRAGON')}}>DRAGON</button>
        <button onClick={()=>{bet('TIGER')}}>TIGER</button>
        <button onClick={()=>{deal()}}>DEAL</button>
        <div>
            <h1>RESULT</h1>
            <h1>DRAGON VALUE {dragon?.value} </h1>
            <h1>TIGER VALUE {tiger?.value}</h1>
            <h1>Message {message}</h1>
        </div>
    </div>
  )
}
