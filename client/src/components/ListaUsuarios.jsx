import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import axios from 'axios';

function ListaUsuarios() {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        axios.get('user').then(res => {
            console.log(res.data)
            setDataUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const listUsers = dataUsers.map(u => {
        return (
            <UsuarioIndividual userData={u} key={u._id}/>
        )
    })

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            { listUsers }
        </div>
    )
}

export default ListaUsuarios;