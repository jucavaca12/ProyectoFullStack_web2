import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListadoProductos from './productos/ListadoProductos.jsx'
import ListadoClientes from './clientes/ListadoClientes.jsx'
import ListadoProveedores from './proveedores/ListadoProveedores.jsx'
import Home from './Layouts/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
