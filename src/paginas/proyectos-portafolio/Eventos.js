import image0 from '../../imagenes/rey_atanagildo.png';
import image1 from '../../imagenes/rey_ataulfo.png';
import {useRef } from 'react';


function Eventos() {
  const cambio=23.16;
  const refCaja=useRef();
  function incrementar(e){
    e.target.innerHTML=Number(e.target.innerHTML)+1;
    if(e.target.innerHTML>9){
      e.target.innerHTML=1
    }
    if(e.target.innerHTML>7){
      e.target.style.backgroundColor="red";
    }
    else{
      e.target.style.backgroundColor="white";
    }
  }
  const convertir=()=>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }
  const cambiar=(j)=>{
    if(j.target.src.includes("atanagildo")){
      j.target.src=image1;
    }else{
      j.target.src=image0;
    };
  }
  const lectura=(e)=> {
    refCaja.current.innerHTML=e.target.value;
  }


  return ( 
    <>
      <div ref={refCaja} className='caja' onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div><img alt='imagen-evento' onClick={cambiar} src={image0}/></div> 
      <input onChange={lectura} className='campo'/>
    </>
  );
}

export default Eventos;
