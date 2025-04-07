import React, { useContext } from "react";
import { MemberContext } from "./MemberContext";

export const MemberList = () => {
  const { list, setlist } = useContext(MemberContext);

  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };
  const generateName = () => {
    var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //return alpha.charAt(Math.floor(Math.random() * 4));
    var name =""
    for(let i=1;i<=4;i++){
        name = name + alpha.charAt(Math.floor(Math.random() * alpha.length))
    }
    return name;
    
  };
  const generateAGe = () => {
    return Math.floor(Math.random() * 100);
  };
  const generateGender = () => {
    var gender = ["male", "female"];
    return gender[Math.floor(Math.random() * 2)];
  };

  const addMember = ()=>{
    var newMember = {
        id:generateId(),
        name:generateName(),
        age:generateAGe(),
        gender:generateGender()

    }

    setlist([...list, newMember])
  }

  return (
    <div>
      <h1>MEMBER LIST</h1>
      <button className="btn btn-primary" onClick={()=>{addMember()}}>ADD NEW</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {list.map((l) => {
            return (
              <tr>
                <td>{l.id}</td>
                <td>{l.name}</td>
                <td>{l.age}</td>
                <td>{l.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
