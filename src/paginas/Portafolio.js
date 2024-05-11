import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectosPortafolio from './ProjectosPortafolio'
import './Portafolio.css'

function Portafolio() {
  return (
    <div className='contenedor-projectos'>

        <ProjectosPortafolio
        nombreP='projecto-conversor'
        ruta='/conversor'
        titulo='Conversor Eurekae optimizado'
        />

        <ProjectosPortafolio
        nombreP='projecto-eventos'
        ruta='/eventos'
        titulo='Eventos Eurekae'
        />

        
        <div className='projecto-eventos'><NavLink to='/eventos'>Eventos Eurekae</NavLink></div> 
        <br/>    	
        <div className='projecto-menu'><NavLink to='/menu'>Menu Eurekae</NavLink></div> 
        <br/>
        <div className='projecto-aficionesreyes'><NavLink to='/aficionesreyes'>Aficiones Reyes</NavLink></div>
        <br/>
        <div className='projecto-cenaconrey'><NavLink to='/cenaconrey'>Cena Con Reyes</NavLink></div> 
        <br/>
        <div className='projecto-premios'><NavLink to='/premios'>Premios</NavLink></div> 
        <br/>
        <div className='projecto-suma'><NavLink to='/suma'>Suma</NavLink></div> 
        <br/>
        <div className='projecto-eurekaebeta'><NavLink to='/eurekaebeta'>EurekaeBeta</NavLink></div> 
        <br/>
        <div className='projecto-comprasapp'><NavLink to='/comprasapp'>Compras</NavLink></div> 
        <br/>
        <div className='projecto-contador'><NavLink to='/contador'>Contador</NavLink></div> 
        
    </div>
  )
}

export default Portafolio
