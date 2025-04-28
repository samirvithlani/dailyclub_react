import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProduComponent = () => {

    //dispacth
    const dispacth = useDispatch()
  return (
    <div>
        <h1>PRODUCT COMPONENT</h1>
        <div className='card'>
            <label>IPHONE 16</label>
            <p>PRICE = 1200$</p>
            <button onClick={()=>{dispacth(addToCart({id:1,name:"iphone16",price:1200}))}}>add to cart</button>
            
        </div>
        <div className='card'>
            <label>IPHONE 15</label>
            <p>PRICE = 1000$</p>
            <button onClick={()=>{dispacth(addToCart({id:2,name:"iphone15",price:1000}))}}>add to cart</button>
            
        </div>
    </div>
  )
}
