import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../CustomLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { tr } from "framer-motion/client";

export const ApiDemo1 = () => {
  //getapi...

  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(true);
  const [user, setuser] = useState({})

  const handleClose = () => setshow(false);

  const detailUser = async (id) => {

    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
    //console.log(res); //axios object
    console.log(res.data); //axios.data
    setuser(res.data.data);
    setshow(true);
  }

  const deleteUser = async (id) => {
    setisLoading(true);
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log(res); //axios object
    //console.log(res.data) //axios.data
    if (res.status === 204) {
      // alert("User Deleted Successfully")
      toast.success("🦄 User Deleted..");
      getUserData();
    }
    setisLoading(false);
  };

  const getUserData = async () => {
    //start
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res); //axios object
    console.log(res.data); // axios.data --> api response...
    setmessage(res.data.message);
    setusers(res.data.data);
    //end
    setisLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
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
      <h1>API DEMO 1</h1>
      {isLoading == true && <CustomLoader />}
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
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive == true ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      detailUser(user._id);
                    }}>DETAIL </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>USER DETAIL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
