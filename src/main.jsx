import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'
import './index.css'
import Contato from './pages/Contato.jsx'
import Servicos from './pages/Servicos.jsx'
import Sobre from './pages/Sobre.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ConteudoPrincipal /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/contato', element: <Contato /> },
      { path: '/servicos', element: <Servicos /> }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
