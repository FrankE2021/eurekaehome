import React from 'react';
import {useState} from 'react';
import "./AficionesReyes.css";


const AficionesReyes = () => {
    const reyesGodos=[
        {
            nombre:"Ataulfo",
            aficion:"comer toros sin pelear",
        },{
            nombre:"Recesvinto",
            aficion:"leer a Hegel en Arameo",
        },{
            nombre:"Teodorico",
            aficion:"la cria del escarabajo en almibar"
        }
    ]

    const[contador, setContador]=useState(0);
    const[mensaje, setMensaje]=useState(0);

    const cambio=()=>{
        setContador(contador+1);
        if(contador+1>=reyesGodos.length){
            setContador(0);           
        }
        
        setMensaje(<h2>La aficion principal de <sppan className="rojo">{reyesGodos[contador].nombre}</sppan> es <span className="verde">{reyesGodos[contador].aficion}.</span></h2>)
    }

  return (
    <>
        <div>
            <button onClick={cambio} className="siguiente">Ver Siguiente</button> 
            <div className='caja'>{mensaje}</div>    
        </div>
    </>
  )
}

export default AficionesReyes

