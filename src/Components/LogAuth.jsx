import React, { useState} from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LogAuth = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();
 
  useEffect(()=>{
  sessionStorage.clear();
 },[])

  const logForm = (e) => {
     e.priventDefault();
     if(ValidityState()){
      fetch("http://142.93.221.114/auth/login/" + name).then((res)=>{
        return res.json();
      }).then((resp)=>{
        // console.log(resp)
        if(Object.keys(resp).length ===0){
          toast.error('please Enter valid name');
        }else{
          if(resp.password === password){
            toast.success('Success');
            sessionStorage.setItem('name', name);
            nevigate("/")
          }else{
            toast.error("pleas Enter valid credentials");
          }
        }
      }).catch((err)=>{
        toast.error('Login Failed due to :'+err.message);
      });
     } 
  };
  const validate =()=>{
    let result = true;
  }

  return (
    <>
      <div className="col-sm-6 offset-sm-3 mt-5">
        <form onSubmit={logForm}>
          <h2 className="text-center">LOGIN</h2>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            value={name}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            value={password}
          />

          <div className="d-flex justify-content-center mt-2">
            <button type="btn" className="btn btn-primary px-2">
              login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogAuth;
