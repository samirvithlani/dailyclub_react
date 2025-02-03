import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const FormDemo2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("error",errors)

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    ageValidation:{
        required:{
            value:true,
            message:"age is required *"
        },
        min:{
            value:18,
            message:"min age should be 18"
        }   
    }
  }
  return (
    <div>
      <h1>FORM DEMO 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name",{required:{value:true,message:"Name is Required*"}})}></input>
          {errors.name?.message}
        </div>
        <div>
            <label>AGE</label>
            <input type="text" {...register("age",validationSchema.ageValidation)}></input>
            {errors.age?.message}
        </div>
        <div>
          <input type="submit" value={"submit"}></input>
        </div>
      </form>
    </div>
  );
};
