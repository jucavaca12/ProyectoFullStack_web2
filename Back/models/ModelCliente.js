import { DataTypes } from "sequelize";
import dataBase from "../database/ConexionDataBase.js";

const Clientes = dataBase.define('clientes', {
    nombre: {
        type: DataTypes.STRING
    }, 
    documento: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    barrio: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    }
});

export default Clientes