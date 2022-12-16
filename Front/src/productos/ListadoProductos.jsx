import React from "react";
import Header from "../Helpers/Header.jsx";

const ListadoProductos =() =>{
    return(
        <section>
            <Header />
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>descripcion</td>
                        <td>cantidad</td>
                        <td>precio</td>
                        <td>referencia</td>
                    </tr>
                </thead>
            </table>
        </section>
    )
}

export default ListadoProductos;