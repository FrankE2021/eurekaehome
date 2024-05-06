import React from 'react'
import { NavLink } from 'react-router-dom'
import './Portafolio.css'

function Portafolio() {
  return (
    <div className='contenedor-projectos'>

        <div className='projecto-conversor'><NavLink to='/conversor'>Conversor Eurekae</NavLink></div> 

      
        <div className='projecto-eventos'><NavLink to='/eventos'>Eventos Eurekae</NavLink></div> 
      	
      
        <div className='projecto-menu'><NavLink to='/menu'>Menu Eurekae</NavLink></div> 
      
    </div>
  )
}

export default Portafolio
