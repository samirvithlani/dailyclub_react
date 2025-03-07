import axios from 'axios'
import { s } from 'framer-motion/client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { CustomLoader } from '../CustomLoader'

export const ApiDemo3 = () => {

    const [isLoading, setisLoading] = useState(false)


    const {register,handleSubmit} =useForm()
    const submitHandler = async (data) => {
        console.log(data);
    try{
        setisLoading(true)
        const res = await axios.post("https://node5.onrender.com/user/user",data)
        setisLoading(false)
        if(res.status === 201){
            toast.success("User Added Successfully")
        }
    }catch(err){
        setisLoading(false)
        toast.error("Something went wrong")
    }

    }


  return (
    <div>
         <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      {
        isLoading  && <CustomLoader/>
      }
        <h1>AADD USER...</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type='number' {...register("age")}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' {...register("email")}></input>
            </div>
            <div>
                <label>STATUS</label>
                <input type='text' {...register("isActive")}></input>
            </div>
            <div>
                <input type='submit' value='ADD USER'></input>
            </div>
        </form>
    </div>
  )
}
