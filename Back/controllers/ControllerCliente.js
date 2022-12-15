import { Sequelize } from "sequelize";
import Clientes from "../models/ModelCliente.js";

const crearCliente = async (req, res)=>{
    try {
        await Clientes.create(req.body)
        res.json({
            message: 'Cliente registrado satisfactoriamente'
        })
    } catch (error) {
        res.json({
            message: 'No se pudo registrar. ' + error 
        })
    }
}

const mostrarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia'
    })
    }
}

const mostrarCliente = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const clientes = await Clientes.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {document: req.params.id}
                ]
            }
        })
        res.json(clientes)
    } catch (error) {
        res.json({
            Message: 'No existe Registro. ' + error
        })
    }
}

export{
    crearCliente,
    mostrarCliente,
    mostrarClientes
}