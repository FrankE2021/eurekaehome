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
        titulo='Conversor Eurekae'
        />

        <ProjectosPortafolio
        nombreP='projecto-eventos'
        ruta='/eventos'
        titulo='Eventos Eurekae'
        />

        <ProjectosPortafolio
        nombreP='projecto-menu'
        ruta='/menu'
        titulo='Menu Eurekae'
        />

        <ProjectosPortafolio
        nombreP='projecto-aficionesreyes'
        ruta='/aficionesreyes'
        titulo='Aficiones Reyes'
        />

        <ProjectosPortafolio
        nombreP='projecto-cenaconrey'
        ruta='/cenaconrey'
        titulo='Cena Con Reyes'
        />

        <ProjectosPortafolio
        nombreP='projecto-premios'
        ruta='/premios'
        titulo='Premios'
        />

        <ProjectosPortafolio
        nombreP='projecto-suma'
        ruta='/suma'
        titulo='Suma'
        />

        <ProjectosPortafolio
        nombreP='projecto-eurekaebeta'
        ruta='/eurekaebeta'
        titulo='EurekaeBeta'
        />

        <ProjectosPortafolio
        nombreP='projecto-comprasapp'
        ruta='/comprasapp'
        titulo='Compras'
        />

        <ProjectosPortafolio
        nombreP='projecto-contador'
        ruta='/contador'
        titulo='Contador'
        />

        <ProjectosPortafolio
        nombreP='projecto-calculadora'
        ruta='/calculadora'
        titulo='Calculadora'
        />

        <ProjectosPortafolio
        nombreP='projecto-info'
        ruta='/info'
        titulo='Informacion'
        />

        <ProjectosPortafolio
        nombreP='projecto-viajes'
        ruta='/viajes'
        titulo='Viajando'
        />

        <ProjectosPortafolio
        nombreP='projecto-ahorcado'
        ruta='/ahorcado'
        titulo='El Ahorcado'
        />

        <ProjectosPortafolio
        nombreP='projecto-parejas'
        ruta='/parejas'
        titulo='Parejas'
        />
        
        <ProjectosPortafolio
        nombreP='projecto-norrisjokes'
        ruta='/norrisjokes'
        titulo='Norris Jokes'
        />

        <ProjectosPortafolio
        nombreP='projecto-shopping'
        ruta='/shopping'
        titulo='Shopping'
        />

        <ProjectosPortafolio
        nombreP='projecto-idiomas'
        ruta='/idiomas'
        titulo='Idiomas'
        />

        <ProjectosPortafolio
        nombreP='projecto-reservaciones'
        ruta='/reservaciones'
        titulo='Reservaciones'
        />

        <ProjectosPortafolio
        nombreP='projecto-votacion'
        ruta='/votacion'
        titulo='Votacion'
        />
        
    </div>
  )
}

export default Portafolio
