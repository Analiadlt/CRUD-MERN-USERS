import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditarUsuario() {

    const params = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.post('/user/obtenerdatausuario', { idusuario: params.idusuario }).then(res => {
           // console.log(res.data[0])
            const datausuario = res.data[0];
            setName(datausuario.name);
            setEmail(datausuario.email);
            setPhone(datausuario.phone);
        })
    }, [params.idusuario])

    function editUser() {
        const newData = {
            name: name,
            email: email,
            phone: phone,
            idusuario: params.idusuario
        }

        axios.post('/user/edit', newData)
            .then(res => {
                // alert(res.data)
                Swal.fire('Edit User', res.data)
                navigate('/');
            })
            .then(err => { console.log(err) })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className="mt-4">Edit User</h2>
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

                    <button onClick={editUser} className='btn btn-success'>Save Data User</button>
                </div>
            </div>
        </div>
    )
}

export default EditarUsuario;