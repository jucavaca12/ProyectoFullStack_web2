import Producto from "../models/ModelProducto.js";

const crearProducto = async(res, req) => {
    try {
        await Producto.create(req.body)
        res.json({
            message: 'Usuario creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo registrar el usuario : ${error}`
        })    
    }
}

const mostrarProductos = async  (req, res) => {
    try {
        const AllProductos = await Producto.findAll()
        res.json(AllProductos)
    } catch (error) {
        res.json({
        Message: 'Base de datos en blanco. '
    })
    }
}
const mostrarProducto = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const UndProducto = await Producto.findOne({
            where:{
                [Op.or] : [
                {id: req.params.id},
                {referencia: req.params.id }
                ]
            }
        })
        res.json(UndProducto)
    } catch (error) {
        res.json({
            Message: 'El producto no tiene existencias. ' + error
        })
    }
}



export {
    crearProducto,
    mostrarProducto,
    mostrarProductos
}