import { DataTypes } from "sequelize";
import dataBase from "../database/ConexionDataBase.js";

const Proveedores = dataBase.define('proveedores', {
    nombre: {
        type: DataTypes.STRING
    }, 
    nit: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    producto: {
        type: DataTypes.STRING
    }
});

export default Proveedores