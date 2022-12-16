import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="Header">
            <nav>
                <Link to = {'/'}>Inicio</Link>
                <Link to = {'/clientes'}>Clientes</Link>
                <Link to = {'/productos'}>Productos</Link>
                <Link to = {'/proveedores'}>Proveedores</Link>
            </nav>
        </header>
    )
}

export default Header;