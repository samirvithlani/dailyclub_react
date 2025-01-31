import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  //register ->object : useState object..
  //handleSubmit function....

  //USER DEFINE..
  const submitHandler = (data) => {
    //{name:"sankjssa"}
    console.log("form subbmited...", data);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>FORM DEMO 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter Name" {...register("name")}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="number" placeholder="Enter Age" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE : <input type="radio" name="gender" value="male" {...register("gender")}></input>
          
          FEMALE : <input type="radio" name="gender" value="female" {...register("gender")}></input>
        </div>
        <div>
          <label>HOBBIES</label>
          Cricket:<input type="checkbox" value="cricket" name="hobbies" {...register("hobbies")}></input>
          Chess:<input type="checkbox" value="chess" name="hobbies" {...register("hobbies")}></input>
          Reading:<input type="checkbox" value="reading" name="hobbies" {...register("hobbies")}></input>
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
    </div>
  );
};
