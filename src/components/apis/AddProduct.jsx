import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = async(data) => {
    console.log(data);
    const res = await axios.post("https://node5.onrender.com/product/create",data)
    console.log(res.data)
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ADD PRODUCT</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAme</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>price</label>
          <input type="text" {...register("price")}></input>
        </div>
        <div>
          <label>description</label>
          <input type="text" {...register("description")}></input>
        </div>
        <div>
          <label>colors</label>
          GREEN:
          <input type="checkbox" value="green" {...register("colors")}></input>
          WHITE:
          <input type="checkbox" value="white" {...register("colors")}></input>
          BLACK:
          <input type="checkbox" value="black" {...register("colors")}></input>
        </div>
        <div>
          <label>SIZE</label>
          <select {...register("size")}>
            <option value="l">L</option>
            <option value="m">M</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div>
          <label>AVAIALIBLITY ?</label>
          yes :{" "}
          <input type="radio" value="true" {...register("isAvailable")}></input>
          NO :{" "}
          <input
            type="radio"
            value="false"
            {...register("isAvailable")}
          ></input>
        </div>
        <div>
            <label>unit</label>
            <input type="text" {...register("unit")}></input>
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
