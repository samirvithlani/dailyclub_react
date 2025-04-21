import React, { useEffect, useState } from 'react'

export const ViewExpense = () => {
    const [expenseList, setexpenseList] = useState([])
    useEffect(() => {
      
        // const exp = localStorage.getItem("expense")
        // console.log(exp)
        setexpenseList(JSON.parse(localStorage.getItem("expense")))
      
    }, [])
    
  return (
    <div>
        <h1>VIEW EXEPNSE..</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>title</th>
                    <th>amount</th>
                    <th>cat</th>
                </tr>
                </thead>
                <tbody>
                    {
                        expenseList?.map((exp)=>{
                            return <tr>
                                <td>{exp.exptitle}</td>
                                <td>{exp.amount}</td>
                                <td>{exp.cat}</td>
                            </tr>
                        })
                    }
                </tbody>
            

        </table>
    </div>
  )
}
