import React from 'react'

function Cena({nombre,precio,color,setTotal}) {
    const ruta="http://www.html6.es/img/rey_"
    const imagen=`${ruta}${nombre.toLowerCase()}.png`;
    const comprar=(elemento)=>{ 
      setTotal((e)=> e+precio);  
      elemento.target.parentNode.parentNode.parentNode.style.display="none";      
    }

  return (
    <>
        <div className="rey" style={{backgroundColor:color}}>
            <h1>{nombre}</h1>
            <div className='titulo'>Precio:</div>
            <div className='precio'>
                {precio}€
                <div>
            <button onClick={comprar}>Comprar</button>
            <img alt='imgrey' src={imagen}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cena
