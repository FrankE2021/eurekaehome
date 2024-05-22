import React from 'react';

const Votacion = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://votacion-omega.vercel.app/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Votacion"
      ></iframe>
    </div>
  );
};

export default Votacion;