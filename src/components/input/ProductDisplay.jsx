import React from 'react'

export const ProductDisplay = (props) => {
    console.log(props)
    
  return (
    <div>
        <h1>Product Data</h1>
        <h2>{props.product.productName}</h2>
    </div>
  )
}
