import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListadoProductos from './productos/ListadoProductos'
import ListadoClientes from './clientes/ListadoClientes'
import ListadoProveedores from './proveedores/ListadoProveedores'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Este es el home</h1>
  },
  {
    path: '/productos',
    element: <ListadoProductos />
  },
  {
    path: '/clientes',
    element: <ListadoClientes />
  },
  {
    path: '/proveedores',
    element: <ListadoProveedores />
  }
])

function App() {

  return (
    <section className="bg bg-info">
      <RouterProvider router = {routes}/>
    </section>
  )
}

export default App
