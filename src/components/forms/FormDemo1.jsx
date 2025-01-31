import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [output, setoutput] = useState({});
  const [isSubbmites, setisSubbmites] = useState(false);
  //register ->object : useState object..
  //handleSubmit function....

  //USER DEFINE..
  const submitHandler = (data) => {
    //{name:"sankjssa"}
    setisSubbmites(true);
    console.log("form subbmited...", data);
    setoutput(data);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>FORM DEMO 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name")}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age")}
          ></input>
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE :{" "}
          <input
            type="radio"
            name="gender"
            value="male"
            {...register("gender")}
          ></input>
          FEMALE :{" "}
          <input
            type="radio"
            name="gender"
            value="female"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>HOBBIES</label>
          Cricket:
          <input
            type="checkbox"
            value="cricket"
            name="hobbies"
            {...register("hobbies")}
          ></input>
          Chess:
          <input
            type="checkbox"
            value="chess"
            name="hobbies"
            {...register("hobbies")}
          ></input>
          Reading:
          <input
            type="checkbox"
            value="reading"
            name="hobbies"
            {...register("hobbies")}
          ></input>
        </div>
        <div>
          <label>COUNTRY</label>
          <select {...register("country")}>
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
      {isSubbmites && (
        <div>
          <h1>OUTPUT</h1>
          <h1>Name = {output.name}</h1>
          <h2>AGE = {output.age}</h2>
          <h2>gender = {output.gender}</h2>
          <h2>country = {output.country} </h2>
          <h1>HOBBIES</h1>
          <ul>
            {
              output.hobbies!= false &&
              output.hobbies?.map((h)=>{
                return <li>{h}</li>
              })
            }
          </ul>
        </div>
      )}
    </div>
  );
};
