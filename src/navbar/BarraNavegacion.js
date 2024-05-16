import { NavLink } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import './BarraNavegacion.css';
import { useNavigate } from 'react-router-dom';
import Contexto from '../context/Contexto';

function BarraNavegacion() {

  const navegacion=useNavigate();
  const {deslogearme}=useContext(Contexto); 
  const login=()=>{
    navegacion("/login",{replace:true})
    deslogearme();
  }

  // Estado para controlar la visibilidad del menú desplegable
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para cerrar el menú cuando se hace clic en un enlace
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className={`barra-navegacion ${menuAbierto ? 'menu-abierto' : ''}`}>
      <div className="toggle-menu" onClick={toggleMenu}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>
      <ul className={`menu ${menuAbierto ? 'menu-abierto' : ''}`}>
        <li><NavLink to='/' onClick={cerrarMenu}>Home</NavLink></li>
        <li><NavLink to='/portafolio' onClick={cerrarMenu}>Portafolio</NavLink></li>
        <li><NavLink to='/productos' onClick={cerrarMenu}>Productos</NavLink></li>
        <li><NavLink to='/servicios' onClick={cerrarMenu}>Servicios</NavLink></li>
        <li><NavLink to='/acercade' onClick={cerrarMenu}>AcercaDe</NavLink></li>
      </ul>
      <div className='unlog'>
        <button onClick={login}>Logout</button>      
      </div>
    </nav>
  );
}

export default BarraNavegacion;
