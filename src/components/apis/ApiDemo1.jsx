import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../CustomLoader";

export const ApiDemo1 = () => {
  //getapi...

  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const getUserData = async () => {
    //start
    setisLoading(true)
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);//axios object
    console.log(res.data) // axios.data --> api response...
    setmessage(res.data.message)
    setusers(res.data.data)
    //end
    setisLoading(false)
  };

  useEffect(() => {
    
    getUserData()
    
  }, [])
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>
      {
        isLoading == true && <CustomLoader/>
      }
      {/* <button onClick={()=>{getUserData()}}>GET</button> */}
      {message}
      <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive == true ?"Active":"Not Active"}</td>
                            

                        </tr>
                    })
                }
            </tbody>
      </table>
    </div>
  );
};
