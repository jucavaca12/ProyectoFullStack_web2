import {React, useState, useEffect } from "react";
import Header from "../Helpers/Header.jsx";
import axios from 'axios';
import { Link } from "react-router-dom";

const apiProductos = "http://localhost:5174/productos"

const ListadoProductos =() =>{

    const [productos, setProductos] = useState([])
    useEffect (()=>{
        mostarProductos()
    }, []);

    const mostarProductos = async () =>{
        const datos = await axios.get(apiProductos)
        setProductos(datos.data)
    }

    return(
        <section>
            <Header />
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripcion</td>
                        <td>Cantidad</td>
                        <td>Precio</td>
                        <td>Referencia</td>
                        <td>Fecha de creacion</td>
                        <td>Fecha de actualizacion</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto)=>(
                            <tr key ={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.referencia}</td>
                                <td>{producto.createdAt}</td>
                                <td>{producto.updatedAt}</td>
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

export default ListadoProductos;