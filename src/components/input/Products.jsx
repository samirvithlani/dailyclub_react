import React, { useState } from 'react'
import { ProductDisplay } from './ProductDisplay'

export const Products = () => {
    const [productName, setproductName] = useState("")
    const [productPrice, setproductPrice] = useState()
    const [productQty, setproductQty] = useState("")
    const [product, setproduct] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)

    const submitHandler = ()=>{

        //console.log(productName,productPrice,productQty)
        var productObj  = {
            productName:productName,
            productPrice:productPrice,
            productQty:productQty
        }
        
        setproduct(productObj)
        setisSubbmited(true)
    }
  return (
    <div>
        <h1>PRODUCTS</h1>
        <div>
            <label>Name</label>
            <input type='text' placeholder='enter product name' 
            onChange={(event)=>{setproductName(event.target.value)}}></input>
        </div>
        <div>
            <label>Price</label>
            <input type='text' onChange={(event)=>{setproductPrice(event.target.value)}}></input>
        </div>
        <div>
            <label>QTY</label>
            <input type='text' onChange={(event)=>{setproductQty(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>ADD</button>
        </div>

{
    isSubbmited &&<ProductDisplay product={product}></ProductDisplay>
}
        
    </div>
  )
}
