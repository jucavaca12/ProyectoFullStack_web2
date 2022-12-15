import express from 'express';
import {crearProducto, editarProducto, eliminarProducto, mostrarProducto, mostrarProductos} from '../controllers/ControllerProducto.js'

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos);
productoRouter.get('/:id', mostrarProducto);
productoRouter.put('/:id', editarProducto);
productoRouter.delete('/:id', eliminarProducto);

export default productoRouter;