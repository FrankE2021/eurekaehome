import React from 'react'
import logoEurekae from '../../../imagenes/logo-eurekae.png'
import './Calculadora.css'

function Calculadora() {
  return (
      <div className='contenedor-principal-calculadora'>
        <div className='eurekae-logo-calculadora-contenedor'>
          <img 
            src={logoEurekae}
            className='eurekae-logo'
            alt='Logo de Eurekae' />
        </div>

        <div className='contenedor-calculadora'>
          
        </div>
      </div>
  )
}

export default Calculadora
