import React, { useEffect, useState } from 'react'

export const ViewExpense = () => {
    const [expenseList, setexpenseList] = useState([])
    useEffect(() => {
      
        // const exp = localStorage.getItem("expense")
        // console.log(exp)
        setexpenseList(JSON.parse(localStorage.getItem("expense")))
      
    }, [])
    const deleteExpense = (id)=>{
        var expense = JSON.parse(localStorage.getItem("expense"))
        console.log(expense)
        var filtExpenses = expense.filter((exp)=>exp.id != id)
        console.log(filtExpenses)
        localStorage.setItem('expense', JSON.stringify(filtExpenses));
        setexpenseList(filtExpenses)
    }
  return (
    <div>
        <h1>VIEW EXEPNSE..</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>title</th>
                    <th>amount</th>
                    <th>cat</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    {
                        expenseList?.map((exp)=>{
                            return <tr>
                                <td>{exp.exptitle}</td>
                                <td>{exp.amount}</td>
                                <td>{exp.cat}</td>
                                <td>
                                    <button onClick={()=>{deleteExpense(exp.id)}} className='btn btn-danger'>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            

        </table>
    </div>
  )
}
