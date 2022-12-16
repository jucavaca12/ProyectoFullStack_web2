import {React, useState, useEffect} from "react";
import Header from "../Helpers/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const apiClientes = "http://localhost:3100/clientes"

const ListadoClientes = () =>{

    const [clientes, setClientes] = useState([])
    useEffect (()=>{
        mostarClientes()
    }, []);

    const mostarClientes = async () =>{
        const datos = await axios.get(apiClientes)
        setClientes(datos.data)
    }

    return(
        <section>
            <Header />
            <table>
                <thead>
                    <td>Nombre</td>
                    <td>Documento</td>
                    <td>Correo</td>
                    <td>Direccion</td>
                    <td>Barrio</td>
                    <td>Telefono</td>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente)=>(
                            <tr key ={cliente.id}>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.documento}</td>
                                <td>{cliente.correo}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.barrio}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.createdAt}</td>
                                <td>{cliente.updatedAt}</td>
                                <td>
                                    <Link className="btn btn-warning">editar</Link>
                                    <Link className="btn btn-danger">eliminar</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListadoClientes;