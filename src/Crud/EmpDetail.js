import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetail = () => {
    const [empdata, setempdata] = useState({})
    const{empid}= useParams();

    useEffect(()=>{
        fetch("http://localhost:5000/Employee/" + empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setempdata(resp);
        }).catch((err)=>{
         console.log(err.message);
        })
    },[empid]);
  return (
   <>
  
<section>
<div className='card text-left'>
    <h2>Employee List</h2>
    {empdata &&
    <div>
        <h2>the Employee name is : <b>{empdata.name}</b> ({empdata.id}) </h2>
       <h3>Contact Details</h3>
       <h3>Email is : {empdata.email}</h3>
       <h3>phone is : {empdata.phone}</h3>
       <Link to="emp" className='btn btn-primary'>Back to table</Link>
    </div>
    }
     </div>
</section>
   </>
  )
}

export default EmpDetail
