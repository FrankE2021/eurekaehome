  import React from 'react';

  const Ahorcado = () => {
    return (
      <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="https://viajando-kappa.vercel.app/"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Ahorcado"
        ></iframe>
      </div>
    );
  };
  
  export default Ahorcado;