import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectosPortafolio.css'

function ProjectosPortafolio(props) {
  return (
    <div className='contenedor-principal-projectos'>
		  <div className={props.nombreP}><NavLink to={props.ruta}>{props.titulo}</NavLink></div> 
    </div>
  )
}

export default ProjectosPortafolio



