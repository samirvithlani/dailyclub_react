import React from 'react'

export const StudentList = (props) => {
    //{students:Array}
  return (
    <div>
        <h1>LIST</h1>
        <table className='table table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>Marks</th>
                <th>Grade</th>
            </tr>
            <tbody>
                {
                    props.students.map((stu)=>{
                        return<tr>
                            <td>{stu.id}</td>
                            <td>{stu.name.toUpperCase()}</td>
                            <td>
                                <span style={{color:stu.age<23?"red":"white"}}>{stu.age}</span>
                            </td>
                            <td>
                                {stu.marks}
                            </td>
                            <td>
                                {
                                    stu.marks>=80 ?"A":
                                    stu.marks>=70 ?"B":
                                    "C"
                                }
                            </td>
                            <td>
                                {
                                    stu.marks>=80?<span style={{color:"green"}}>A</span>:
                                    stu.marks>=70?<span style={{color:"yellow"}}>B</span>:
                                    <span style={{color:"red"}}>C</span>

                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
