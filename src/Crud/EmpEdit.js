import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EmpEdit = () => {
    useEffect(() => {
        fetch("http://localhost:5000/Employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setId(resp.id);
            setName(resp.name);
            setEmail(resp.email);
            setPhone(resp.phone);
        })
    }, []);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const { empid } = useParams();
    const navgate = useNavigate();
    const handalEditform = (e) => {
        e.preventDefault();
        const empdata = { id, name, email, phone, };
        fetch("", {
            method: "PUT",
            headers: {
                "content-type": "applicatuion/json"
            },
            body: JSON.stringify(empdata)
        }).then((resp) => {
            toast.success('update');
            navgate("/emp");
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <>
            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9 offset-sm-2'>
                            <div className=' text-center'>Employee Create</div>
                            <form onSubmit={handalEditform}>
                                {/* <div className='mb-3'>
                                    <lable>ID</lable>
                                    <input value={id} className="form-control"/>
                                </div> */}
                                <div class="mb-3">
                                    <label htmlfor="ename" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="ename" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label htmlfor="emal" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="emal" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label htmlfor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="9999999999" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="submit" className='btn btn-primary'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmpEdit