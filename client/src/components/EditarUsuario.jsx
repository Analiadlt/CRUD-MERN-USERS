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
        //axios.get(`http://localhost:3001/edit/${payload}`);
        axios.post(`edit/${params.id}`).then(res => {
            console.log('DATA' , res.data[0])
        })
    }, [params])

    return (
        <div>
            <h2>Editar Usuario</h2>
            <h3>El ID del usuario es: {params.id}</h3>
        </div>
    )
}

export default EditarUsuario;