import React from "react";
import Header from "../Helpers/Header";

const ListadoProveedores = () =>{
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
            </table>
        </section>
    )
}

export default ListadoProveedores;