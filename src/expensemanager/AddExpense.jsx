import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const AddExpense = () => {
    const{register,handleSubmit,reset} =  useForm()
    const [categories, setcategories] = useState([
        {
            id:1,
            name:"Groc"
        },
        {
            id:2,
            name:"Medical"
        },
        {
            id:3,
            name:"travel"
        }
    ])
    const [expenses, setexpenses] = useState([{}])
    useEffect(()=>{
        if(localStorage.getItem("expense")==null){
            localStorage.setItem("expense",JSON.stringify(expenses))
        }
    })

    const navigate = useNavigate()
    const submitHanlder = (data)=>{

        var expFromLocalStorage = localStorage.getItem("expense") //string...
        console.log(expFromLocalStorage)
        var expObject = JSON.parse(expFromLocalStorage)
        console.log(expObject)
        expObject.push(data)
        localStorage.setItem("expense",JSON.stringify(expObject))
        navigate("/viewexpense")

       
        
    }
  return (
    <div>
        <h1>ADD EXPSNE</h1>
        <form onSubmit={handleSubmit(submitHanlder)}>
            <div>
                <label>EXPENSE-title</label>
                <input type='text' {...register("exptitle")}></input>
            </div>
            <div>
                <label>Amount</label>
                <input type='number' {...register("amount")}></input>
            </div>
            <div>
                <label>CAtegories</label>
                <select {...register("cat")}>
                    <option>SELECT CATEGORY</option>
                    {
                        categories?.map((cat)=>{
                            return <option value={cat.name}>{cat.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
