import axios from 'axios'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const {control,handleSubmit,register,reset} = useForm({
        defaultValues:{
            products:[{name:"",price:0,description:"",isAvailable:true,unit:0,colors:[]}]
        }
    })

    const {fields,append,remove} = useFieldArray({
        control,
        name:"products"
    })
    const submitHandler = async(data)=>{
        console.log("data....",data)
        const res = await axios.post("https://node5.onrender.com/product/addproducts",data.products)
        console.log(res.data)
        reset()
    }
  return (
    <div>
        <h1>FormDemo6</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((filed,i)=>{
                    return<div>
                        <div>
                            <label>PRODUT NAME</label>
                            <input type='text' {...register(`products.${i}.name`)}></input>
                        </div>
                        <div>
                            <label>DESCRIPTION</label>
                            <input type='text' {...register(`products.${i}.description`)}></input>
                        </div>
                        <div>
                            <label>price</label>
                            <input type='text' {...register(`products.${i}.price`)}></input>
                        </div>
                        <div>
                            <label>UNIT</label>
                            <input type='text' {...register(`products.${i}.unit`)}></input>
                        </div>
                        <div>
                            <label>ISAVAIALBLE</label>
                            <input type='text' {...register(`products.${i}.isAvailable`)}></input>
                        </div>
                        <div>
                            <label>COLORS</label> <br></br>
                            GREEN : <input type='checkbox' value="green" {...register(`products.${i}.colors`)}></input>
                            RED : <input type='checkbox' value="red" {...register(`products.${i}.colors`)}></input>
                            BLUE : <input type='checkbox' value="blue" {...register(`products.${i}.colors`)}></input>
                        </div>
                    </div>
                })
            }
            <div>
                <button type='button' onClick={()=>{append({name:"",price:0,description:"",isAvailable:true,unit:0,colors:[]})}}>APPEND</button>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>

    </div>
  )
}
