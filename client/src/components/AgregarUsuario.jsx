import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from  'axios';
import uniquid from 'uniqid';
import Swal from 'sweetalert2';

function AgregarUsuario() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    function addUser() {

        var newUser = {
            name: name,
            email: email,
            phone: phone,
            idusuario: uniquid()
        }

        axios.post('user/add', newUser)
        .then(res => {
            // alert(res.data)
            Swal.fire('New user added succesfully.', name)
            navigate('/');
        })
        .then(err => {console.log(err)})
    }


    return (
        <div className='container'>
            <div className='row'>
                <h2 className="mt-4">New User</h2>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className="mb-3">
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' className="form-control" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='phone' className='form-label'>Phone</label>
                        <input type='text' className="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }}></input>
                    </div>

                    <button onClick={addUser} className='btn btn-success'>Save Data User</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarUsuario;