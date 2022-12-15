import express from 'express';
import crearProducto from '../controllers/ControllerProducto';

const clienteRouter = express.Router();

clienteRouter.post('/', crearProducto)

export default clienteRouter;