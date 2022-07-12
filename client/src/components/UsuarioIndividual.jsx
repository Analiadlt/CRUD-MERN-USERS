import React from "react";
import { Link } from 'react-router-dom';

function UsuarioIndividual({ userData }) {
    console.log('userData ', userData)
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <ul className='list-group'>
                        <li className='list-group-item'>{userData.name}</li>
                        <li className='list-group-item'>{userData.email}</li>
                        <li className='list-group-item'>{userData.phone}</li>
                    </ul>
                    <Link to={`/editarUsuario/${userData._id}`}><li className="btn btn-success">Edit</li></Link>
                    &nbsp;
                    <button className="btn btn-danger">Delete</button>
                    <hr className="mt-4"></hr>
                </div>



            </div>
        </div>
    )
}

export default UsuarioIndividual;