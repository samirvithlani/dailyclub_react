import React from 'react'

export const SalesList = (props) => {

  return (
    <div>
        <h1>SALES LIST</h1>
        <table className='table table-light'>
            <tr>
                <th>ID</th>
                <th>UNIT</th>
                <th>CAT</th>
                <th>PROFIT</th>
            </tr>
            <tbody>
                {
                    props.sales.map((sale)=>{
                        return<tr style={{backgroundColor:sale.unit>=100 && "green"}}>
                            <td>{sale.tId}</td>
                            <td>{sale.unit}</td>
                            <td style={{color:(sale.category=="grocery" || sale.category =="fashion") ? "red":"black"}}>{sale.category}</td>
                            <td><span style={{backgroundColor:sale.profit>=30 &&"yellow"}}>{sale.profit} %</span></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
