import { NavLink } from 'react-router-dom'
import React from 'react'
import './BarraNavegacion.css'

function BarraNavegacion() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/portafolio'>Portafolio</NavLink>
        <NavLink to='/productos'>Productos</NavLink>
        <NavLink to='/servicios'>Servicios</NavLink>
        <NavLink to='/acercade'>AcercaDe</NavLink>
    </nav>
  )
}

export default BarraNavegacion
