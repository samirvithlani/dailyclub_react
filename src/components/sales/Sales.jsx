import React from 'react'
import { SalesList } from './SalesList'

export const Sales = () => {


    const salesData = [
        {
            tId:"Abc123",
            unit:120,
            category:"grocery",
            profit:25
        },
        {
            tId:"Abc124",
            unit:200,
            category:"fashion",
            profit:10
        },
        {
            tId:"Abc121",
            unit:10,
            category:"Eletronic",
            profit:110
        },{
            tId:"Abc100",
            unit:150,
            category:"grocery",
            profit:35
        }

    ]
    
  return (
    <div>
        <h1>Sales</h1>
        <SalesList sales = {salesData}></SalesList>
    </div>
  )
}
