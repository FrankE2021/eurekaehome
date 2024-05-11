import React from 'react'
import eurekaeLogo from '../../../imagenes/logo-eurekae.png';
import './Contador.css'
import Boton from './Boton';
import ContClic from './ContClic';
import { useState } from 'react';


function Contador() {
    const [numClics, setNumClic] = useState(0);

    const manejarClic = () => {
        setNumClic(numClics+1);
    } 
    
    const reiniciarContador = () => {
        setNumClic(0);
    } 

  return (
    <div className='contador'>
        <div className='eurekae-logo-contenedor'>
            <img className='eurekae-logo'
                src={eurekaeLogo}
                alt='Logo de Eurekae'/>
        </div>
        <div className='contenedor-principal-contador'>
            <ContClic numClics={numClics} />
            <Boton 
                texto='Clic'
                esBotonDeClic={true}
                manejarClic={manejarClic}/>
            <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}/>
        </div>
    </div>
  )
}

export default Contador
