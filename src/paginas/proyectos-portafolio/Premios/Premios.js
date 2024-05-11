import './Premios.css';
import { useEffect, useState} from 'react';

function Premios() {
  const [datos, setDatos] =useState([])

  useEffect(()=>{
  const url ="http://randomuser.me/api/?results=3"; 
  const peticion=fetch(url);
  peticion
  .then(datos=> datos.json())
  .then(lectura=> {
    lectura.results.map((persona) => {
      setDatos((e)=>
      [...e,<div key={persona.email}>
        <div className='person-name'>{persona.name.first} {persona.name.last} </div>
        <div>
          <img alt='apifoto' src={persona.picture.large}/>
        </div>
      </div>])
    })
  })
  .catch(()=>console.log("Se ha producido un error"))
  },[])
  

  return (
    <>
    <h1>Premiados</h1>
    <div className='person-container '>
      {datos} 
    </div>  
    </>
  );
}

export default Premios;
