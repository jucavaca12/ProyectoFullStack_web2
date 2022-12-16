/*Importacion de dependencias y archivos*/
import express from 'express';
import dataBase from './database/ConexionDataBase.js';
import clienteRouter from './routes/RouterClientes.js';
import productoRouter from './routes/RouterProducto.js';
import cors from 'cors';

/* Instancia de Express y apertura de puerto*/
const app = express();
const port = 3100;

/*Validacion de conexion a la base de datos*/
try {
    await dataBase.authenticate()
    console.log(`conexion exitosa a la base de datos`)
} catch (error) {
    console.log(`Conexion no exitosa: ${error}`)
}

app.use(cors())
app.use(express.json())

app.use('/productos', productoRouter) 
app.use('/clientes', clienteRouter) 
app.use('/proveedores', productoRouter) 



app.listen(port, ()=>{
    console.log (`servidor corriendo en el puerto ${port}`)
    console.log (`servidor funcionando en http://localhost:3100`)
});