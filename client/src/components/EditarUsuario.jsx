import axios from "axios";
// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import { useParams } from 'react-router';

function EditarUsuario() {

    const params = useParams();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');

    useEffect(() => {
        axios.post('/user/obtenerdatausuario', {idusuario: params.idusuario}).then(res=>{
            console.log(res.data[0])
        })
    }, [params.idusuario])

    return (
        <div>
            <h2>Editar Usuario</h2>
            <h3>El ID del usuario es: {params.idusuario}</h3>
        </div>
    )
}

export default EditarUsuario;