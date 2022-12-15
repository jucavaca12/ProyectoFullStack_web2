import { Sequelize } from "sequelize"
import Proveedores from "../models/ModelProveedores.js"

const crearProveedor = async (req, res)=>{
    try {
        await Proveedores.create(req.body)
        res.json({
            message: 'Proveedor registrado correctamente'
        })
    } catch (error) {
        res.json({ message: 'No se pudo registrar. ' + error })
    }
}

const mostrarProveedores = async  (req, res) => {
    try {
        const proveedores = await Proveedores.findAll()
        res.json(proveedores)
    } catch (error) {
        res.json({ Message: 'Base de datos vacia. ' + error })
    }
}

const mostrarProveedor = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const proveedores= await Proveedores.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {nit: req.params.id }
                ]
            }
        })
        res.json(proveedores)
    } catch (error) {
        res.json({ message: 'El Proveedor no existe en la base de datos. ' + error })
    }
}

export {
    crearProveedor,
    mostrarProveedor,
    mostrarProveedores
}