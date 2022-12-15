import express from 'express';
import { crearCliente, mostrarCliente, mostrarClientes } from '../controllers/ControllerCliente.js';


const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente)
clienteRouter.get('/', mostrarCliente);
clienteRouter.get('/:id', mostrarCliente);

export default clienteRouter;