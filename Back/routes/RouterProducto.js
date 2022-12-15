import express from 'express';
import {crearProducto, mostrarProducto, mostrarProductos} from '../controllers/ControllerProducto.js'

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos);
productoRouter.get('/:id', mostrarProducto);


export default productoRouter;