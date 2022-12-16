import {React, useState, useEffect} from "react";
import Header from "../Helpers/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const apiProveedores = "http://localhost:3100/proveedores"

const ListadoProveedores = () =>{

    const [proveedores, setProveedores] =useState([])
    useEffect(()=>{
        mostrarProveedores()
    }, []);

    const mostrarProveedores = async ( )=>{
        const datos = await axios.get(apiProveedores)
        setProveedores(datos.data)
    }

    return(
        <section>
            <Header />
            <table>
                <thead>
                    <td>Nombre</td>
                    <td>Nit</td>
                    <td>Correo</td>
                    <td>Direccion</td>
                    <td>Telefono</td>
                    <td>Producto</td>
                </thead>
                <tbody>
                    {
                        proveedores.map((proveedor)=>(
                            <tr key={proveedor.id}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.nit}</td>
                                <td>{proveedor.correo}</td>
                                <td>{proveedor.direccion}</td>
                                <td>{proveedor.telefono}</td>
                                <td>{proveedor.producto}</td>
                                <td>{proveedor.createdAt}</td>
                                <td>{proveedor.updatedAt}</td>
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

export default ListadoProveedores;