import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      medicines: [{ name: "", dosage: "", freqency: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicines",
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {fields.map((field, index) => {
          return (
            <div>
              <div>
                <label>MEDICINE NAME</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.name`)}
                ></input>
              </div>
              <div>
                <label>MEDICINE DOSAGE</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.dosage`)}
                ></input>
              </div>
              <div>
                <label>MEDICINE FREQUENCY</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.frequency`)}
                ></input>
              </div>
            </div>
          );
        })}
        <div>
            <button type="button" onClick={()=>{append({ name: "", dosage: "", freqency: "" })}}>Add medicine</button>
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
