import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Regauth = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");



  const navigate = useNavigate();
  const regSubmit = (e) => {
    e.preventDefault();
    let regobj = { name, password, email };
    console.log(regobj);
  
    fetch("http://142.93.221.114/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": " application/json"
      },
      body: JSON.stringify(regobj)
    }).then((res) => {
      toast.success("Registered successfully.")
      navigate("/logauth");
    }).catch((err) => {
     toast.error("Failed:"+err.message);  
    })
    
  };
  return (
    <>
      <div className="col-sm-6 offset-sm-3 mt-5">
        <form onSubmit={regSubmit}>
          <h2 className="text-center my-2">Registration</h2>
          <input
            type="text"
            className="form-control"
            placeholder="UserName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="d-flex justify-content-center mt-2">
            <button type="submit" className="btn btn-primary px-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Regauth;
