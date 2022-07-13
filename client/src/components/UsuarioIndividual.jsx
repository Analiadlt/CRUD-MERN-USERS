import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

function UsuarioIndividual({ userData }) {

    const navigate = useNavigate();

    //animation scroll
    useEffect(() => {
        AOS.init();
    }, [])

    function deleteUser(idusuario) {
        axios.post('/user/deleteUser', { idusuario: idusuario }).then(res => {
           // alert(res.data)
            Swal.fire('Delete', res.data)
            navigate('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3" data-aos='flip-right'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{userData.name}</li>
                        <li className='list-group-item'>{userData.email}</li>
                        <li className='list-group-item'>{userData.phone}</li>
                    </ul>
                    <Link to={`/editarusuario/${userData.idusuario}`}><li className="btn btn-success">Edit</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => { deleteUser(userData.idusuario) }}>Delete</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual;