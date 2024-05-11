import React from 'react'
import AcercaDe from './paginas/AcercaDe'
import Home from './paginas/Home'
import Productos from './paginas/Productos'
import Servicios from './paginas/Servicios'
import Error404 from './paginas/Error404'
import Login from './paginas/Login'

import BarraNavegacion from './BarraNavegacion'
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom'

import Portafolio from './paginas/Portafolio'
import Conversor from './paginas/proyectos-portafolio/Conversor/Conversor'
import Eventos from './paginas/proyectos-portafolio/Eventos/Eventos'
import Menu from './paginas/proyectos-portafolio/Menu/Menu'
import AficionesReyes from './paginas/proyectos-portafolio/AficionesReyes/AficionesReyes'
import CenaConRey from './paginas/proyectos-portafolio/CenaConRey/CenaConRey'
import Premios from './paginas/proyectos-portafolio/Premios/Premios'
import Suma from './paginas/proyectos-portafolio/Suma/Suma'
import EurekaeBeta from './paginas/proyectos-portafolio/Eurekae0.1/EurekaeBeta'
import CompraApp from './paginas/proyectos-portafolio/Compras/CompraApp'
import Contador from './paginas/proyectos-portafolio/ContadorClic/Contador'




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
        
        <Route path="/conversor" element={<Conversor />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aficionesreyes" element={<AficionesReyes />} />
        <Route path="/cenaconrey" element={<CenaConRey />} />
        <Route path="/premios" element={<Premios />} />
        <Route path="/suma" element={<Suma />} />
        <Route path="/eurekaebeta" element={<EurekaeBeta />} />
        <Route path="/comprasapp" element={<CompraApp />} />
        <Route path="/contador" element={<Contador />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
