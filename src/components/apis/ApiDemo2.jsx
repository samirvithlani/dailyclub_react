import axios from "axios";
import React, { useState } from "react";
import { CustomLoader } from "../CustomLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const ApiDemo2 = () => {
  const [isLoading, setisLoading] = useState(false);
  
  const addUser = async () => {
    const userObj = {
      name: "Parth",
      age: 18,
      email: "parth@gmail.com",
      isActive: true,
    };

    //axios..
    setisLoading(true);
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res); //axios response
    console.log(res.data); //response data
    setisLoading(false);

    if (res.status === 201) {
        toast.success('🦄 User Added..', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
      //alert("User Added Successfully")
      //navigaet,,,
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1>ApiDemo2</h1>
      {isLoading && <CustomLoader />}
      <button
        onClick={() => {
          addUser();
        }}
      >
        Add User
      </button>
    </div>
  );
};
