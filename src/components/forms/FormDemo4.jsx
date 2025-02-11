import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {
  //useForm
  const { register, handleSubmit } = useForm();
  const [isSubmit, setisSubmit] = useState(false);
  const [result, setresult] = useState({});
  //register -->object -->input
  //handleSubmit --> function...
  const submitHandler = (data) => {
    console.log(data);
    setresult(data);
    setisSubmit(true)
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input
            type="text"
            {...register("age")}
            placeholder="enter age"
          ></input>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
      {/* {
        isSubmit == true ?<div>
        <h1>OUT PUT</h1>
        <h1>NAMe = {result.name}</h1>
        <h1>Age = {result.age}</h1>
      </div>
      :""
      } */}

      {isSubmit == true && (
        <div>
          <h1>OUT PUT</h1>
          <h1>NAMe = {result.name}</h1>
          <h1>Age = {result.age}</h1>
        </div>
      )}
    </div>
  );
};
