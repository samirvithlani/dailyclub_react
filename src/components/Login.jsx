import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {

    var users = [
        {
            id:1,
            name:"ram",
            role:"ADMIN",
            email:"ram@gmail.com",
            password:"ram123"
        },
        {
            id:2,
            name:"seeta",
            role:"USER",
            email:"seeta@gmail.com",
            password:"seeta123"
        },
        {
            id:3,
            name:"amit",
            role:"MANAGER",
            email:"amit@gmail.com",
            password:"amit123"
        },
    ]

    const {register,handleSubmit}=useForm()
    const submitHandler = (data)=>{
        //console.log(data)

        const foundUser = users.find((user)=>user.email == data.email && user.password == data.password)
        
        if(foundUser){
            alert("login...")
            localStorage.setItem("role",foundUser.role)
        }
    }

  return (
    <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
