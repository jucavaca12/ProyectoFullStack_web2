import React from "react";
import Header from "../Helpers/Header";

const ListadoClientes = () =>{
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
            </table>
        </section>
    )
}

export default ListadoClientes;