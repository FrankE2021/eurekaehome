import React from 'react'
import AcercaDe from './paginas/AcercaDe'
import Home from './paginas/Home'
import Productos from './paginas/Productos'
import Servicios from './paginas/Servicios'
import Portafolio from './paginas/Portafolio'
import Error404 from './paginas/Error404'
import Login from './paginas/Login'
import BarraNavegacion from './BarraNavegacion'
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter>
    <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
