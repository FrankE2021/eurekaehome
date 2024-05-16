import {Routes, Route} from "react-router-dom"
import Recuperacion from "../paginas/Recuperacion"
import Login from "../paginas/Login"
import Router2 from "./Router2"
import RutasPublicas from "./RutasPublicas"
import RutasPrivadas from "./RutasPrivadas"

const Router1 = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={
      <RutasPublicas>
        <Login/>
      </RutasPublicas> 
      }/>
      <Route path="recuperacion" element={
      <RutasPublicas>
        <Recuperacion/>
      </RutasPublicas>
      }/>
      <Route path="/*" element={
      <RutasPrivadas>
        <Router2/>
      </RutasPrivadas>
      }/>
    </Routes>
    </>
  )
}

export default Router1



/*<Route path="/" element={<Home />} />
import AcercaDe from './paginas/AcercaDe'
import Home from './paginas/Home'
import Productos from './paginas/Productos'
import Servicios from './paginas/Servicios'
import Error404 from './paginas/Error404'
import Login from './paginas/Login'

import BarraNavegacion from './navbar/BarraNavegacion'
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
import Calculadora from './paginas/proyectos-portafolio/Calculadora/Calculadora'




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
        <Route path="/calculadora" element={<Calculadora />} />
*/        