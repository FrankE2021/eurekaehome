import './App.css'
import React from 'react'
import Provider from './context/Provider';
import Router1 from './router/Router1'




function App() {
  return (
    <>
      <Provider>
        <Router1 />
      </Provider>
    </>
  )
}

export default App
