import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { toast } from 'react-toastify';
import './crud.css'
const Employee = () => {
    const [emp, setEmp] = useState(null);
const nevagate = useNavigate()
    const Edit = (id) => {
    nevagate("/employee/empedit/"+id)
    }
    const Delete = (id) => {
     if(window.confirm('Do you want to rempove?')){
        fetch("http://localhost:5000/Employee/"+id,{
           method: "DELETE" 
        }).then((res)=>{
            toast.success('Success');
          window.location.reload();
        }).catch((err)=>{
            console.log(err.message)
        })
     }
    }
    const Details = (id) => {
     nevagate("/employee/detail/"+id)
    }


    useEffect(() => {
        fetch("http://localhost:5000/Employee").then((res) => {
            return res.json();
        }).then((resp) => {
            setEmp(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='card px-3'>
                        <div className='d-flex justify-content-end mt-3'>
                    <Link type='button' className='btn btn-success  ' to="/empcrt">Add</Link>
                    </div>
                        <div className="text-center">Employee</div>
                        <div className='table-res'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emp &&
                                        emp.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>
                                                        <div className='d-flex justify-content-center'>
                                                            < button type='button' onClick={() => { Edit(item.id) }} className='btn btn-primary '>Edit</button>
                                                            <button type='button' onClick={() => { Delete(item.id) }} className='btn btn-danger mx-2'>Delete</button>
                                                            <button type='button' onClick={() => { Details(item.id) }} className='btn btn-success'>Detials</button>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employee