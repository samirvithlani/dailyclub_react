import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //actions
        //state -->intialState 
        //action --> 2 params 1 type,2 payload..
        //type : "cart/addToCart"
        //payload : called action -->data -->
        addToCart:(state,action)=>{
            //state.cart...
            console.log(state)
            console.log(action)
            state.cart.push(action.payload)
        }
    }
})
export const {addToCart} = cartSlice.actions //component...
export default cartSlice.reducer