import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormDemo5 = () => {
    const {register,handleSubmit} =useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                MALE:<input type='radio' value={"male"} {...register("gender")}></input>
                FEMALE:<input type='radio' value={"female"} {...register("gender")}></input>
            </div>
            <div>
                CHESS:<input type='checkbox' value={"chess"} {...register("games")}></input>
                Cricker:<input type='checkbox' value={"cricket"} {...register("games")}></input>
                Football:<input type='checkbox' value={"football"} {...register("games")}></input>
            </div>
            <select {...register("country")}>
                <option value={"india"}>INDIA</option>
                <option value={"usa"}>USA</option>
                <option value={"uk"}>fail</option>
            </select>

            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
