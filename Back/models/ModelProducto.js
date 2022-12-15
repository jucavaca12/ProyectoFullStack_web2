import { DataTypes } from "sequelize";
import dataBase from "../database/ConexionDataBase.js";

const Producto = dataBase.define('productos', {
    nombre:{
        type: DataTypes.STRING
    }, 
    descripcion:{
        type: DataTypes.STRING
    },
    cantidad:{
        type: DataTypes.INET
    },
    precio:{
        type: DataTypes.INET
    },
    referencia:{
        type: DataTypes.INET
    }

})

export default Producto;